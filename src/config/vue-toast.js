// These settings can be used as a base for the toasts through all the application. Properties like type, icon, className etc, can be overriden if necessary wherever you use this options.

// The default styles for all toasts can be found at src/assets/styles/vue-toast/index.scss

export const toastDefaultOptions = {
  position: 'bottom-center',
  keepOnHover: true,
  containerClass: 'ui toast circular',
  duration: 2000,
  theme: 'bubble'
}

export const toastTopCenterOptions = {
  position: 'top-center',
  keepOnHover: true,
  containerClass: 'toasted-top-container',
  duration: 2000
}
