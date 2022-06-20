export default function (customSelectElement, selectListElement) {
  return {
    data() {
      return {
        listPosition: ''
      }
    },
    methods: {
      // Parsing path based on given string. Allows to access inner object properties.
      parsePath(path) {
        if (!path) return

        path += ''

        const split = path.split('.')
        return split.reduce((acc, curr) => acc && acc[curr], this)
      },
      // Adjusts the position of the elements list (top or bottom).
      checkPosition(element, reposition) {
        const spaceAbove = this.$el.getBoundingClientRect().top
        const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom
        const hasEnoughSpaceBelow = spaceBelow > '300px'

        if (hasEnoughSpaceBelow || spaceBelow > spaceAbove) {
          reposition(element, 'bottom')
        } else {
          reposition(element, 'up')
        }
      },
      // The radius depends on the position of the elements on the screen.
      adjustSelectBorderRadius(selectElements) {
        // selectElements is a HTMLCollection. Using Array.from to convert it into a real array.
        Array.from(selectElements).forEach(element => {
          element.classList.remove('default-select-radius')

          if (this.listPosition === 'bottom') {
            element.classList.remove('border-radius-bottom')
            element.classList.add('border-radius-top')
          } else {
            element.classList.remove('border-radius-top')
            element.classList.add('border-radius-bottom')
          }
        })

        return selectElements
      },
      // The radius depends on the position of the elements on the screen.
      adjustListBorderRadius(listElement) {
        if (this.listPosition === 'bottom') {
          listElement.classList.remove('border-radius-top')
          listElement.classList.add('border-radius-bottom')
        } else {
          listElement.classList.remove('border-radius-bottom')
          listElement.classList.add('border-radius-top')
        }
      },
      // Resets to the default border radius.
      resetBorderRadius(elementsList, classToAdd) {
        if (elementsList.length) {
          // elementsList is a HTMLCollection. Using Array.from to convert it into a real array.
          Array.from(elementsList).forEach(element => {
            element.classList.remove('border-radius-top')
            element.classList.remove('border-radius-bottom')
            element.classList.add(classToAdd)
          })
        }

        return elementsList
      },
      // Listens to focus events on the elements.
      addListeners() {
        const customSelect = document.getElementById(this.parsePath(customSelectElement))
        const customSelectList = document.getElementById(this.parsePath(selectListElement))

        customSelect.addEventListener('focusout', () => {
          this.resetBorderRadius([customSelect], 'default-select-radius')
        })
        customSelectList.addEventListener('focusout', () => {
          this.resetBorderRadius([customSelectList], 'default-list-radius')
        })
      },
      // Removes all event listeners.
      removeListeners() {
        const customSelect = document.getElementById(this.parsePath(customSelectElement))
        const customSelectList = document.getElementById(this.parsePath(selectListElement))

        customSelect.removeEventListener('focusout', () => {
          this.resetBorderRadius([customSelect], 'default-select-radius')
        })
        customSelectList.removeEventListener('focusout', () => {
          this.resetBorderRadius([customSelectList], 'default-list-radius')
        })
      }
    },
    unmounted() {
      this.removeListeners()
    }
  }
}
