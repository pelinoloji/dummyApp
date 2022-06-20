import deepcopy from 'deepcopy'
const numberToWords = require('number-to-words')

export function flattenGroupFields(group, removeDummy = true) {
  const fields = group.fields.reduce((result, fieldset) => [...result, ...fieldset], [])
  return removeDummy ? fields.filter(f => f.field !== 'dummy') : fields
}

export function isAnswerSelected(answer) {
  return !(answer === '' || answer === null || (typeof answer === 'string' && answer.length === 0) || (Array.isArray(answer) && answer.length === 0)) || answer === false
}

export function isFieldRequired(field) {
  const { rules } = field
  if (!rules) return false
  if (Object(rules) === rules) {
    if (Object.hasOwnProperty.call(rules, 'required')) return rules.required
    return false
  }
  return rules.includes('required')
}

function isFieldPassesDependence(field, fieldsList) {
  return !!field.dependsOn.every(dependency => {
    const checkField = fieldsList.find(f => f.name === dependency.fieldName)
    if (!checkField) return false
    if (Array.isArray(dependency.values)) {
      const checkFieldSelectedList = Array.isArray(checkField.selected) ? checkField.selected : [checkField.selected]
      return checkFieldSelectedList.findIndex(checkFieldSelected => dependency.values.includes(checkFieldSelected)) !== -1
    } else if (dependency.rule && typeof dependency.rule === 'function') {
      const parentScope = this ? this.$parent : null
      return dependency.rule.call(parentScope, checkField.selected)
    }
    return Array.isArray(field.selected) ? !!field.selected.length : !(checkField.selected === null || checkField.selected === '' || typeof checkField.selected === 'undefined')
  })
}

export function getStepProgress(step) {
  const answers = step.groups
    .reduce((result, group) => {
      const allFields = flattenGroupFields(group)
      const fieldsToCount = allFields.filter(field => {
        if (field.isCountable === false || !field.field || (field.type === 'checkbox' && field.selected === false && !isFieldRequired(field))) return false
        return (isAnswerSelected(field.selected) || isFieldRequired(field)) && (!field.dependsOn || isFieldPassesDependence(field, flattenGroupFields(group, false)))
      })
      return [...result, ...fieldsToCount]
    }, [])
    .map(field => (field.type === 'checkbox' ? field.selected || '' : field.selected))
  return {
    completed: answers.reduce((result, answer) => (isAnswerSelected(answer) ? result + 1 : result), 0),
    total: answers.length
  }
}

function generateSelectedOption(field) {
  const selectedList = Array.isArray(field.selected) ? field.selected : [field.selected]
  selectedList.forEach(selected => {
    const selectedOptionIndex = field.options.findIndex(option => (typeof option === 'string' ? option === selected : option.value === selected))
    const isSelectedInOptionsList = selectedOptionIndex !== -1
    if (isSelectedInOptionsList) return
    // Generate new option
    field.options.splice(-1, 0, { label: selected, value: selected })
  })
}

function removeSelectedWithoutOption(field) {
  const selectedIsArray = Array.isArray(field.selected)
  const selectedList = selectedIsArray ? [...field.selected] : [field.selected]
  selectedList.forEach((selected, index) => {
    const selectedOptionIndex = field.options.findIndex(option => (typeof option === 'string' ? option === selected : option.value === selected))
    const isSelectedInOptionsList = selectedOptionIndex !== -1
    if (isSelectedInOptionsList) return
    if (selectedIsArray) {
      field.selected.splice(index, 1)
    } else {
      field.selected = ''
    }
  })
}

export function prefillFormData(form, data = {}, replaceOptions = {}, veeNameSuffix = null) {
  form.groups.forEach(group => {
    group.fields.forEach(fieldset => {
      fieldset.forEach(field => {
        // Set options for field
        if (field.name in replaceOptions) {
          field.options = replaceOptions[field.name]
        }
        // Set selected for field
        if (field.name in data) {
          if (data[field.name] !== null) {
            field.selected = deepcopy(data[field.name])
            if (field.isGenerateSelectedOption) {
              generateSelectedOption(field)
            } else if (field.options) {
              removeSelectedWithoutOption(field)
            }
          }
        }
        // Generate veeName Suffix
        if (veeNameSuffix !== null) {
          field.veeName = `${field.name}-${veeNameSuffix}`
        }
      })
    })
  })
}

export function isFieldVisible(field, group) {
  if (!field.dependsOn) return true
  const allFields = group.fields.reduce((result, fieldset) => [...result, ...fieldset], [])
  return isFieldPassesDependence.call(this, field, allFields)
}

function getGroupData(group, value) {
  const data = {}
  group.fields.forEach(fieldset => {
    fieldset.forEach(field => {
      if (field.field !== 'dummy' && field.name && field.selected !== '' && field.selected !== null && isFieldVisible.call(this, field, group, value.groups)) {
        data[field.name] = field.selected
      }
    })
  })
  return data
}

export function prepareFormData(value) {
  const data = {}
  value.groups.forEach(group => {
    if (group.choice === 'multiple' && group.name) {
      if (!(group.name in data)) {
        if (group.fields.length === 0) return
        data[group.name] = []
      }
      data[group.name].push(getGroupData(group, value))
    } else {
      Object.assign(data, getGroupData(group, value))
    }
  })
  return {
    name: value.name,
    data
  }
}

export function generateGroup(data, formGroupPartial, veeNameSuffix = String(Math.random()).slice(2)) {
  const form = { groups: [deepcopy(formGroupPartial)] }
  prefillFormData(form, data, {}, veeNameSuffix)
  return form.groups[0]
}
export function generateGroups(dataList, formGroupPartial) {
  return dataList.map(data => generateGroup(data, formGroupPartial))
}

const MAX_COLUMNS = 12

export function getColumnsCount(field) {
  return field.columns || 1
}
export function getColumnsCountInWords(field) {
  return numberToWords.toWords(field.columns || 1)
}
export function getColumnsCountClass(field, maxColumns = MAX_COLUMNS) {
  const columns = Array.isArray(field) ? field.length : getColumnsCount(field)
  return `col-sm-12 col-md-${maxColumns / columns}`
}
export function getColumnOptions(options, column, field) {
  const filteredOptions = []
  const columns = getColumnsCount(field)
  if (columns > 1) {
    for (let i = column - 1; i < options.length; i = i + columns) {
      filteredOptions.push(options[i])
    }
    return filteredOptions
  }
  return options
}
