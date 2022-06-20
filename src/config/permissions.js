export const canRead = 'can_read'
export const canCreate = 'can_create'

export default {
  // You can have simple logic for checking if current user has write rights
  [canRead] () { return true },
  // ... or you can even perform AJAX request and return Promise instance
  [canCreate] () { return Promise.resolve() }
}
