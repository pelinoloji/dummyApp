/* eslint-disable camelcase */

import { required, required_if, numeric, confirmed, regex, ext, min, max, min_value as minValue, max_value as maxValue, size } from 'vee-validate/dist/rules'
import { extend, localize, setInteractionMode } from 'vee-validate'

import { removeSeparatorsAndParseToNumber, onlyNumbers } from '@/utils/currency'
import numberSeparator from '@/filters/numberSeparator'

const emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)/i
const emailValidator = {
  message() {
    return 'This field must be a valid email'
  },
  validate(value) {
    return { valid: emailReg.test(value) }
  }
}

const strongPasswordReg = /^.*((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}).*$/
const newUserPasswordValidator = {
  message() {
    return 'This field should contain at least an uppercase letter, lowercase letter and number'
  },
  validate(value) {
    return { valid: strongPasswordReg.test(value) }
  }
}

const minLengthValidator = {
  params: ['minCount'],
  message(field, { minCount }) {
    return `This field must be ${minCount} items or more`
  },
  validate(value, { minCount }) {
    return new Promise(resolve => {
      resolve({ valid: value.length >= minCount })
    })
  }
}

const maxLengthValidator = {
  params: ['maxCount'],
  message(field, { maxCount }) {
    return `This field must be ${maxCount} items or less`
  },
  validate(value, { maxCount }) {
    return new Promise(resolve => {
      resolve({ valid: value.length <= maxCount })
    })
  }
}

const decimalValidator = {
  message(field) {
    return 'This field may only contain numeric or decimal values'
  },
  validate(value) {
    return { valid: !isNaN(Number(value)) }
  }
}

const requiredIfFalsy = {
  params: [
    {
      name: 'target',
      isTarget: true
    },
    {
      name: 'values'
    }
  ],
  validate(value, { target }) {
    const falsyValues = [0, false, '', '0']
    // if field is falsy
    if (falsyValues.includes(target)) {
      // value cannot be falsy
      return !falsyValues.includes(value)
    }

    return true
  }
}

const maxValueValidator = {
  ...maxValue,
  message(field, { max }) {
    return `This field must be ${numberSeparator(max)} or less`
  }
}

const minValueDecimal = {
  message() {
    return 'min_value'
  },
  validate(value) {
    return onlyNumbers(value) >= 1
  }
}

const nameReg = /(?!.*['-\s]{2,})^[a-z'-\s]{1,}$/i
const nameValidator = {
  message() {
    return 'This field filed should contain only letters and special symbols'
  },
  validate(value) {
    return { valid: nameReg.test(value) }
  }
}

const consent = {
  message() {
    return 'This field is required.'
  },
  validate(value) {
    return { valid: value === true }
  }
}

const customInteractionMode = ({ errors }) => {
  if (errors.length) {
    return {
      on: ['input', 'change']
    }
  }
  return {
    on: ['input', 'change']
  }
}

const requiredDefaultMessage = {
  ...required,
  message: 'This field is required'
}

const customRequiredMessage = {
  ...required,
  message: 'required'
}

const maxCurrencyValue = {
  message(field, args) {
    return `This field must be ${args[0]} or less`
  },
  validate(value, args) {
    return { valid: removeSeparatorsAndParseToNumber(value.toString()) <= args[0] }
  }
}

const minCurrencyValue = {
  message(field, args) {
    return `This field must be ${args[0]} or more`
  },
  validate(value, args) {
    return { valid: removeSeparatorsAndParseToNumber(value.toString()) >= args[0] }
  }
}

const no_speial_chars = {
  message() {
    return 'This field may not contain special characters'
  },
  validate(value) {
    const format = /[`!@#$%^&*()_+\-=[\]{};'"\\|<>?~]/
    return { valid: !format.test(value) }
  }
}

const englishDict = {
  message: {
    alpha: 'This field may only contain alphabetic characters',
    alpha_num: 'This field may only contain alpha-numeric characters',
    alpha_dash: 'This field may contain alpha-numeric characters as well as dashes and underscores',
    alpha_spaces: 'This field may only contain alphabetic characters as well as spaces',
    between: 'This field must be between {min} and {max}',
    confirmed: 'This field confirmation does not match',
    digits: 'This field must be numeric and exactly contain {length} digits',
    dimensions: 'This field must be {width} pixels by {height} pixels',
    email: 'This field must be a valid email',
    excluded: 'This field is not a valid value',
    ext: 'This field is not a valid file',
    image: 'This field must be an image',
    integer: 'This field must be an integer',
    length: 'This field must be {length} long',
    max_value: 'This field must be {max} or less',
    max: 'This field may not be greater than {length} characters',
    mimes: 'This field must have a valid file type',
    min_value: 'This field must be {min} or more',
    min: 'This field must be at least {length} characters',
    numeric: 'This field may only contain numeric characters',
    oneOf: 'This field is not a valid value',
    regex: 'This field format is invalid',
    required_if: 'This field is required',
    required: 'This field is required',
    size: 'This field size must be less than {size}KB'
  }
}
localize(englishDict)

export default () => {
  extend('name', nameValidator)
  extend('required', requiredDefaultMessage)
  extend('custom_required_message', customRequiredMessage)
  extend('required_if_falsy', requiredIfFalsy)
  extend('email', emailValidator)
  extend('newUserPassword', newUserPasswordValidator)
  extend('required', required)
  extend('required_if', required_if)
  extend('decimal', decimalValidator)
  extend('numeric', numeric)
  extend('confirmed', confirmed)
  extend('min_length', minLengthValidator)
  extend('max_length', maxLengthValidator)
  extend('regex', regex)
  extend('ext', ext)
  extend('min', min)
  extend('max', max)
  extend('min_value', minValue)
  extend('max_value', maxValueValidator)
  extend('min_value_decimal', minValueDecimal)
  extend('min_currency_value', minCurrencyValue)
  extend('max_currency_value', maxCurrencyValue)
  extend('size', size)
  extend('consent', consent)
  extend('no_speial_chars', no_speial_chars)
  setInteractionMode('custom', customInteractionMode)
}
