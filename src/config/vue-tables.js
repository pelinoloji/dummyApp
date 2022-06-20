/* eslint operator-linebreak: 0 */

import perpageValuesFn from 'vue-tables-2/compiled/modules/per-page-values'

export const options = {
  preserveState: true,
  texts: {
    count: '{from}-{to} of {count}',
    first: 'First',
    last: 'Last',
    filter: 'Filter:',
    filterPlaceholder: 'Search query',
    limit: 'Records:',
    page: 'Page:',
    noResults: 'No available data.',
    filterBy: 'Filter by {column}',
    loading: 'Loading...',
    defaultOption: 'Select {column}',
    columns: 'Columns'
  },
  skin: 'table',
  sortIcon: {
    base: '',
    up: 'icon-sort-up',
    down: 'icon-sort-down',
    is: 'icon-sort'
  },
  pagination: {
    chunk: 4
  }
}

export const useVuex = false

export const theme = function () {
  return {
    framework: 'bootstrap3',
    table: 'table table-striped',
    tableHeader: 'table-header-wrapper',
    tableFooter: 'table-footer-wrapper',
    row: 'table-wrap-row',
    column: 'table-wrap-column',
    label: '',
    input: 'form-control',
    select: 'form-control',
    field: 'form-group',
    inline: 'form-inline',
    right: 'right',
    left: 'left',
    center: 'center',
    contentCenter: 'content-center',
    small: '',
    nomargin: '',
    groupTr: 'info',
    button: 'btn btn-sm',
    sorter: {
      container: 'sorter-wrapper',
      label: 'sorter-label',
      dropdown: 'sorter-dropdown'
    },
    dropdown: {
      container: 'dropdown',
      trigger: 'dropdown-toggle',
      menu: 'dropdown-menu',
      content: '',
      item: '',
      caret: 'caret'
    },
    pagination: {
      nav: '',
      count: '',
      wrapper: '',
      list: 'pagination',
      item: 'page-item',
      link: 'page-link btn btn-sm',
      next: '',
      prev: '',
      active: 'active'
    }
  }
}

export const template = function (h, modules, classes, slots) {
  slots = {
    ...slots,
    beforeSorter: this.$slots.beforeSorter ? this.$slots.beforeSorter : '',
    afterSorter: this.$slots.afterSorter ? this.$slots.afterSorter : ''
  }
  const filterId = 'VueTables__search_' + this.id
  const ddpId = 'VueTables__dropdown-pagination_' + this.id
  const perpageId = 'VueTables__limit_' + this.id
  const perpageValues = perpageValuesFn.call(this, h)

  const genericFilter = this.hasGenericFilter ?
    <div class="VueTables__search-field">
      <label for={filterId} class={classes.label}>{this.display('filter')}</label>
      {modules.normalFilter(classes, filterId)}
    </div> : ''

  const perpage = perpageValues.length > 1 ? <div class="VueTables__limit-field">
    <label class={classes.label} for={perpageId}>{this.display('limit')}</label>
    {modules.perPage(perpageValues, classes.select, perpageId)}
  </div> : ''

  const dropdownPagination = this.opts.pagination && this.opts.pagination.dropdown ?
    <div class="VueTables__pagination-wrapper">
      <div class={`${classes.field} ${classes.inline} ${classes.right} VueTables__dropdown-pagination`}
        v-show={this.totalPages > 1}
      >
        <label for={ddpId}>{this.display('page')}</label>
        {modules.dropdownPagination(classes.select, ddpId)}
      </div>
    </div> : ''

  const columnsDropdown = this.opts.columnsDropdown ?
    <div class="VueTables__columns-dropdown-wrapper">
      {modules.columnsDropdown(classes)}
    </div> : ''

  const footerHeadings = this.opts.footerHeadings ?
    <tfoot>
      <tr>{modules.headings(classes.right)}</tr>
    </tfoot> : ''

  const sorter = this.opts.showSorter ? sortBarModule.call(this, h)(classes) : ''

  const tableTop = (genericFilter ||
    sorter ||
    perpage ||
    dropdownPagination ||
    columnsDropdown ||
    slots.beforeFilter ||
    slots.afterFilter ||
    slots.beforeSorter ||
    slots.afterSorter) ?
    <div class={classes.tableHeader}>
      <div class={'VueTables__search'}>
        {slots.beforeFilter}
        {genericFilter}
        {slots.afterFilter}
      </div>
      <div class="VueTables__sorter">
        {slots.beforeSorter}
        {sorter}
        {slots.afterSorter}
      </div>
      {perpage ? modules.pagination(classes.pagination) : ''}
      {dropdownPagination}
      {columnsDropdown}
    </div> : ''

  const tableBottom = (perpage ||
    slots.beforeLimit ||
    slots.afterLimit ?
    <div class={classes.tableFooter}>
      <div class={'VueTables__limit'}>
        {slots.beforeLimit}
        {perpage}
        {slots.afterLimit}
      </div>
      {perpage ? modules.pagination(classes.pagination) : ''}
      {perpage ? modules.dropdownPaginationCount() : ''}
    </div> : ''
  )

  return <div class={`VueTables VueTables--${this.source}`}>
    {tableTop}
    {slots.beforeTable}
    <div class="table-responsive">
      <table class={`VueTables__table ${this.opts.skin ? this.opts.skin : classes.table}`}>
        <thead>
          <tr>
            {modules.headings(classes.right)}
          </tr>
          {slots.beforeFilters}
          {modules.columnFilters(classes)}
          {slots.afterFilters}
        </thead>
        {footerHeadings}
        {slots.beforeBody}
        <tbody>
          {slots.prependBody}
          {modules.rows(classes)}
          {slots.appendBody}
        </tbody>
        {slots.afterBody}
      </table>
    </div>
    {slots.afterTable}
    {tableBottom}
  </div>
}

function sortBarModule (h) {
  const getColumnsWithNames = (columns) => {
    return columns.reduce((acc, current) => {
      acc[current] = this.getHeading(current)
      return acc
    }, { '': ' ' })
  }
  return (classes) => {
    const sortingColumns = (Array.isArray(this.opts.sortable) && getColumnsWithNames(this.opts.sortable)) ||
      getColumnsWithNames(this.columns)
    const defaultSortColumn = (this.orderBy && this.orderBy.column) || ''
    return (
      <span class={classes.sorter.container}>
        <span class={classes.sorter.label}>Order by:</span>
        <select class={classes.sorter.dropdown} domPropsValue={defaultSortColumn} onChange={(e) => this.setOrder(e.target.value, true)}>
          {Object.keys(sortingColumns).map((sortingKey) => {
            const sortingVal = sortingColumns[sortingKey]
            if (sortingVal) {
              return <option key={sortingKey} value={sortingKey}>{sortingVal}</option>
            }
            return ''
          })}
        </select>
      </span>
    )
  }
}

export default {
  options,
  useVuex,
  theme,
  template
}
