import dictionary from '@/config/dictionary'
import whitelabel from '@/config/whitelabel'

export const SOLE_TRADER_COMPANY_NUMBER = 'SoleTrader'

export const marketingUrl = `${process.env.VUE_APP_PROD_URL}`.replace('app.', '')

export const privacyPolicyLink = `${marketingUrl}privacy-policy`

export const termsAndConditionsLink = `${marketingUrl}terms-conditions`

export const allowedRouteNamesWithoutTenantCheck = [
  'login',
  'sign-up',
  'sign-up-form',
  'forgot-password',
  'forgot-password-check-email',

  // natwest partner routes
  'natwest-landing',
  'natwest-form',
  'natwest-grants',
  'natwest-grants-overlay',
  'natwest-tax-savings-calculator'
]

export const defaultWhitelabelStyles = {
  logo: require('@/assets/images/logo.svg'),
  signupLogo: require('@/assets/images/swoop-logo-white-colour.svg'),
  colors: null,
  subdomain: 'swoop'
}

export const subdomainList = {
  tatcapital: ['tat'],
  bcc: [
    'bedfordshire-chamber-of-commerce',
    'black-country-chamber-of-commerce',
    'coventry-warwickshire-chamber-of-commerce',
    'devon-plymouth-chamber-of-commerce',
    'doncaster-chamber-of-commerce',
    'dundee-and-angus-chamber-of-commerce',
    'greater-manchester-chamber-of-commerce',
    'hampshire-chamber-of-commerce',
    'herefordshire-and-worcestershire-chamber-of-commerce',
    'hertfordshire-chamber-of-commerce-and-industry',
    'lincolnshire-chamber-of-commerce',
    'liverpool-chamber',
    'london-chamber-of-commerce-industry',
    'mid-yorkshire-chamber-of-commerce',
    'milton-keynes-chamber-of-commerce',
    'northamptonshire-chamber-of-commerce',
    'shropshire-chamber-of-commerce-enterprise',
    'staffordshire-chambers-of-commerce',
    'suffolk-chamber-of-commerce',
    'sussex-chamber-of-commerce',
    'west-cheshire-north-wales-chamber-of-commerce',
    'west-north-yorkshire-chamber-of-commerce',
    'cambridgeshire-chamber-of-commerce',
    'st-helens-chamber-of-commerce'
  ],
  wfe: ['forentrepreneurs'],
  dorset: ['cumbria-chamber-of-commerce']
}

// 'swoop' is added here just to prevent the utils function from running through 'subdomainList' every time
export const defaultWhitelabelSubdomains = ['app', 'swoop', 'natwest']

export const webUrlRegExp = /^(?:(?:https?):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/

export const LSKeys = {
  prevBuildVersion: 'prevBuildVersion',
  codatIntegrationPrevRoute: 'codatIntegrationPrevRoute',
  truelayerIntegrationPrevRoute: 'truelayerIntegrationPrevRoute',
  bankIntegrationPrevRoute: 'bankIntegrationPrevRoute',
  bankIntegrationBankName: 'bankIntegrationBankName',
  productDetailsPrevRoute: 'productDetailsPrevRoute'
}

export const whiteListDocumentExtensions = 'jpg,jpeg,png,pdf,doc,docx,ppt,pptx,pps,ppsx,odt,xls,xlsx,txt'

export const swoopPartnerReferralCookieName = '_spr'
export const swoopPartnerTypeCookieName = '_spt'
export const tenantCookieName = '_stn'
export const gclidCookieName = '_gcl_aw'
export const swoopOpenBankingPartnerTypeValue = 'openbanking'

export const eligibleTermLoanRbsAppUrl = 'https://www.business.rbs.co.uk/business/loans-and-finance/small-business-loan.html'
export const eligibleTermLoanNatWestAppUrl = 'https://www.business.natwest.com/business/loans-and-finance/small-business-loan.html'
export const eligibleTermLoanUlsterBankAppUrl = 'https://digital.ulsterbank.co.uk/business/loans-and-finance/loan.html'
export const eligibleTermLoanHsbcAppUrl = 'https://www.business.hsbc.uk/en-gb/finance-and-borrowing/credit-and-lending/small-business-loan'
export const eligibleOverdraftsHsbcAppUrl = 'https://www.business.hsbc.uk/en-gb/finance-and-borrowing/credit-and-lending/business-overdraft?DCSext.nav=foot-mat'

export const documentTypes = [
  {
    label: 'Financials',
    value: 'Financials',
    titles: [
      { label: '1 Year Filed Accounts', value: '1 Year Filed Accounts', isIreland: false },
      { label: '2 Years Filed Accounts', value: '2 Years Filed Accounts', isIreland: false },
      { label: 'Draft Accounts for previous year', value: 'Draft Accounts for previous year', isIreland: false },
      { label: 'Management Accounts', value: 'Management Accounts', isIreland: false },
      { label: '6 Months Company Bank Statements', value: '6 Months Company Bank Statements', isIreland: false },
      { label: '12 Months Bank Statements', value: '12 Months Bank Statements', isIreland: false },
      { label: '12 Months Merchant Terminal Statements', value: '12 Months Merchant Terminal Statements', isIreland: false },
      { label: 'Proof of Tax Clearance/Tax Access Number', value: 'Proof of Tax Clearance/Tax Access Number', isIreland: true },
      { label: `${dictionary.vat} Returns`, value: `${dictionary.vat} Returns`, isIreland: false },
      { label: 'Summary Aged Debtors report', value: 'Summary Aged Debtors report', isIreland: false },
      { label: 'Detailed Aged Debtors report', value: 'Detailed Aged Debtors report', isIreland: false },
      { label: 'Summary Aged Creditors report', value: 'Summary Aged Creditors report', isIreland: false },
      { label: 'Detailed Aged Creditors report', value: 'Detailed Aged Creditors report', isIreland: false },
      { label: 'A Fixed Asset Schedule', value: 'A Fixed Asset Schedule', isIreland: false },
      { label: 'A schedule of Outstanding Debt', value: 'A schedule of Outstanding Debt', isIreland: false },
      { label: 'Statement of Assets and Liabilities and Income and Expenditure', value: 'Statement of Assets and Liabilities and Income and Expenditure', isIreland: false },
      { label: 'Cashflow Forecast', value: 'Cashflow Forecast', isIreland: false }
    ]
  },
  {
    label: 'Ownership',
    value: 'Ownership',
    titles: [
      { label: 'A certified copy of the Share register and Directors register', value: 'A certified copy of the Share register and Directors register', isIreland: true },
      { label: 'A certified copy of the Certificate of Incorporation', value: 'A certified copy of the Certificate of Incorporation', isIreland: false }
    ]
  },
  {
    label: 'Applications',
    value: 'Applications',
    titles: [
      {
        label: 'Completed Application Form - Saved Swoop Application Forms e.g. Switching Bank, Loan Application, Grant Application etc.',
        value: 'Completed Application Form - Saved Swoop Application Forms e.g. Switching Bank, Loan Application, Grant Application etc.',
        isIreland: false
      }
    ]
  },
  {
    label: 'Funding Documents',
    value: 'FundingDocuments',
    titles: [
      { label: 'A Business Plan', value: 'A Business Plan', isIreland: false },
      { label: 'Pitch Deck', value: 'Pitch Deck', isIreland: false },
      { label: 'A Financial Model', value: 'A Financial Model', isIreland: false },
      { label: 'Financial Forecast', value: 'Financial Forecast', isIreland: false }
    ]
  },
  {
    value: 'Identification',
    label: 'Identification',
    titles: [
      { label: 'Proof of Identity', value: 'Proof of Identity', isIreland: false },
      { label: 'Proof of Address (Dated within last 3 months)', value: 'Proof of Address (Dated within last 3 months)', isIreland: false },
      { label: 'Asset & Liability Statement', value: 'Asset & Liability Statement', isIreland: false }
    ]
  },
  {
    value: 'Other',
    label: 'Other',
    titles: []
  }
]

export const documentTypesDic = documentTypes.reduce((acc, docType) => ({ ...acc, [docType.value]: docType.label }), {})

export const productRequiredDocumentsDic = {
  hasBankStatements: {
    3: { label: 'Bank Statements', type: 'Other', title: '3 Months Bank Statements' },
    6: { label: 'Bank Statements', type: 'Financials', title: '6 Months Company Bank Statements' },
    12: { label: 'Bank Statements', type: 'Financials', title: '12 Months Bank Statements' }
  },
  filedAccounts: {
    1: { title: '1 Year Filed Accounts', type: 'Financials', label: 'Filed Accounts' },
    2: { title: '2 Years Filed Accounts', type: 'Financials', label: 'Filed Accounts' }
  },
  proofOfIdentity: { label: 'Proof of Identity', title: 'Proof of Identity', type: 'Identification' },
  proofOfAddress: { label: 'Proof of Address (Dated within last 3 months)', title: 'Proof of Address (Dated within last 3 months)', type: 'Identification' },
  hasManagementAccounts: { label: 'Management Accounts', type: 'Financials', title: 'Management Accounts' },
  hasVATReturns: { label: `${dictionary.vat} Returns`, type: 'Financials', title: `${dictionary.vat} Returns` },
  hasPersonalGuarantee: { label: 'I confirm I am willing to offer a Personal Guarantee', type: 'Other', title: 'Personal Guarantee' },
  isSummaryAgedDebtors: { label: 'Summary Aged Debtors report', type: 'Financials', title: 'Summary Aged Debtors report' },
  isDetailedAgedDebtors: { label: 'Detailed Aged Debtors report', type: 'Financials', title: 'Detailed Aged Debtors report' },
  isSummaryAgedCreditors: { label: 'Summary Aged Creditors report', type: 'Financials', title: 'Summary Aged Creditors report' },
  isDetailedAgedCreditors: { label: 'Detailed Aged Creditors report', type: 'Financials', title: 'Detailed Aged Creditors report' },
  hasBusinessPlan: { label: 'Business Plan', type: 'FundingDocuments', title: 'A Business Plan' },
  hasPitchDeck: { label: 'Pitch Deck', type: 'FundingDocuments', title: 'Pitch Deck' },
  hasFinancialModel: { label: 'Financial Model', type: 'FundingDocuments', title: 'A Financial Model' },
  hasFinancialForecast: { label: 'Financial Forecast', type: 'FundingDocuments', title: 'Financial Forecast' },
  hasSalie: {
    label: 'Statement of Assets and Liabilities and Income and Expenditure',
    type: 'Financials',
    title: 'Statement of Assets and Liabilities and Income and Expenditure'
  },
  cashFlowForecast: { label: 'Cashflow Forecast', type: 'Financials', title: 'Cashflow Forecast' }
}

export const loanTermMaxDic = {
  0: 'N/A',
  1: '1 month',
  2: '2 months',
  3: '3 months',
  6: '6 months',
  12: '1 year',
  24: '2 years',
  60: '5 years'
}

export const titleOptions = [
  { label: 'Brigadier', value: 'Brigadier' },
  { label: 'Sir', value: 'Sir' },
  { label: 'Dame', value: 'Dame' },
  { label: 'Father', value: 'Father' },
  { label: 'Honourable', value: 'Honourable' },
  { label: 'Lady', value: 'Lady' },
  { label: 'Lord', value: 'Lord' },
  { label: 'Major', value: 'Major' },
  { label: 'Miss', value: 'Miss' },
  { label: 'Mr', value: 'Mr' },
  { label: 'Mrs', value: 'Mrs' },
  { label: 'Ms', value: 'Ms' },
  { label: 'Professor', value: 'Professor' },
  { label: 'Reverend', value: 'Reverend' },
  { label: 'Sergent', value: 'Sergent' },
  { label: 'Commander', value: 'Commander' }
]

export const fundingTypes = [
  { label: 'Loans', value: 'Loans' },
  { label: 'Equity', value: 'Equity' },
  { label: 'Grants', value: 'Grants' }
]

export const genderOptions = [
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
  { label: 'Prefer not to say', value: 'Prefer not to say' },
  { label: 'Other', value: 'Other' }
]

// Outdated don't use it. Need to remove it on future.
export const productTypeFilters = [
  { label: 'Loan', name: 'Loan', selected: true },
  { label: 'Equity', name: 'Equity', selected: true },
  { label: 'Grant', name: 'Grant', selected: true },
  { label: `${dictionary.taxCreditLabel} Tax Credits`, name: 'ResearchAndDevelopmentTaxCredit', selected: true },
  { label: 'Savings', name: 'Saving', selected: true }
]

export const productTypeOptions = [
  { label: 'Live Offer', value: 'LiveOffer' },
  { label: 'Loan', value: 'Loan' },
  { label: 'Equity', value: 'Equity' },
  { label: 'Grant', value: 'Grant' }
]

export const productTypeOptionsDic = productTypeOptions.reduce((acc, productTypeOption) => {
  acc[productTypeOption.value] = productTypeOption
  return acc
}, {})

export const loanSubCategoryTypeOptions = [
  { label: 'Invoice Finance', value: 'InvoiceFinance' },
  { label: 'Supplier Finance', value: 'SupplierFinance' },
  { label: 'Order Finance', value: 'OrderFinance' },
  { label: 'Asset Finance & Leasing', value: 'AssetFinanceLeasing' },
  { label: 'Term Loan', value: 'TermLoan' },
  { label: 'Working Capital Loan', value: 'WorkingCapitalLoan' },
  { label: 'Merchant Finance', value: 'MerchantFinance' },
  { label: 'Crowdfunding', value: 'CrowdfundingLoan' },
  { label: 'MBO Finance', value: 'MboFinance' },
  { label: 'Overdrafts', value: 'Overdrafts' },
  { label: 'Commercial Mortgage', value: 'CommercialMortgage' },
  { label: 'Credit Cards', value: 'CreditCards' },
  { label: 'Startup Loan', value: 'StartupLoan' },
  { label: 'RD Tax Loan', value: 'RAndDTaxLoan' },
  { label: 'Other', value: 'Other' }
]

export const equitySubCategoryTypeOptions = [
  { label: 'SEIS', value: 'SEIS' },
  { label: 'EIS', value: 'EIS' },
  { label: 'VCT', value: 'VCT' },
  { label: 'VC', value: 'VC' },
  { label: 'Angel', value: 'Angel' },
  { label: 'Private Equity', value: 'PrivateEquity' },
  { label: 'Family Office', value: 'FamilyOffice' },
  { label: 'Crowdfunding', value: 'CrowdfundingEquity' }
]

export const tradingAgeRangesOptions = [
  { label: '0 - 6 months', value: 1 },
  { label: '6 months - 1 year', value: 7 },
  { label: '1 year - 2 years', value: 13 },
  { label: '2 years - 5 years', value: 25 },
  { label: '5 years - 7 years', value: 61 },
  { label: '7 years - 10 years', value: 85 },
  { label: '10 years +', value: 121 }
]

export const tradingAgeRangesDic = tradingAgeRangesOptions.reduce((acc, { label, value }) => ({ ...acc, [value]: label }), {})

export const fundingPurposesOptions = [
  { label: 'Covid-19 Impact', value: 'Covid-19 Impact' },
  { label: 'Business expansion', value: 'Business expansion' },
  { label: 'Start a business', value: 'Start a business' },
  { label: 'Acquire a business', value: 'Acquire a business' },
  { label: 'Research', value: 'Research' },
  { label: 'Product development', value: 'Product development' },
  { label: 'Import/Export finance', value: 'Import/Export finance' },
  { label: 'Purchase stock', value: 'Purchase stock' },
  { label: 'Improve cashflow', value: 'Improve cashflow' },
  { label: 'Purchase or develop a property', value: 'Purchase or develop a property' },
  { label: 'Debt refinance ', value: 'Debt refinance ' },
  { label: 'Purchase or refinance of an asset', value: 'Purchase or refinance of an asset' }
]

export const productSubCategoryTypeOptions = [...equitySubCategoryTypeOptions, ...loanSubCategoryTypeOptions]

export const productSubCategoryTypeOptionsDic = productSubCategoryTypeOptions.reduce((acc, productSubCategoryTypeOption) => {
  acc[productSubCategoryTypeOption.value] = productSubCategoryTypeOption
  return acc
}, {})

export const interestedCategoryNamesOptions = [
  { label: 'Banking', value: 'Banking' },
  { label: 'Utilities', value: 'Utilities' },
  { label: 'Broadband', value: 'Broadband' },
  { label: 'FX', value: 'FX' },
  { label: 'Phone', value: 'Phone' }
]

export const fundingRepaymentPeriodYearsOptions = [
  { label: '0 year', value: 0 },
  { label: '1 year', value: 1 },
  { label: '2 years', value: 2 },
  { label: '3 years', value: 3 },
  { label: '4 years', value: 4 },
  { label: '5 years', value: 5 },
  { label: '6 years', value: 6 },
  { label: '7 years', value: 7 },
  { label: '8 years', value: 8 },
  { label: '9 years', value: 9 },
  { label: '10 years', value: 10 }
]
export const fundingRepaymentPeriodMonthOptions = [
  { label: '0 months', value: 0 },
  { label: '1 month', value: 1 },
  { label: '2 months', value: 2 },
  { label: '3 months', value: 3 },
  { label: '4 months', value: 4 },
  { label: '5 months', value: 5 },
  { label: '6 months', value: 6 },
  { label: '7 months', value: 7 },
  { label: '8 months', value: 8 },
  { label: '9 months', value: 9 },
  { label: '10 months', value: 10 },
  { label: '11 months', value: 11 }
]

export const amplitudeEvents = {
  signUp: {
    SME: '<Classic>.<SignUp><SME><PageView>',
    ADVISOR_INTRODUCTION_MOBILE: 'PV Advisor Mobile Introduction',
    ADVISOR_ADD_FIRST_CLIENT: 'PV Advisor Add First Client',
    ADVISOR_SIGN_UP: '<Classic>.<SignUp><AdvisorSignUp><PageView>',
    GOOGLE_SIGN_UP: 'CTA Sign in with Google'
  },
  fundingOnboarding: {
    FORM_SUBMITTED: 'Account created',
    LOGIN: 'login',
    ADD_COMPANY: 'add company',
    ADD_CLIENT_COMPANY: 'Add Client Company',
    INTEG_BANK_START: 'Connect Bank OB',
    INTEG_ACC_START: 'Connect Acc OB',
    CONNECT_BANK_OK: 'Connect Bank Ok',
    CONNECTED_ACC_OK: 'Integration Ok',
    CONNECTED_BANK_OK: 'Integration Ok',
    SKIP_INTEG: 'skip ob integrations',
    CHOOSE_PRODUCT: 'choose funding product type',
    ADD_FUNDING_REQS_DATA: 'Funding reqs submitted',
    ADD_COMPANY_INFO_DATA: 'Company Info submitted',
    ADD_FINANCIAL_DATA: 'Company fin data submitted',
    COMPLETE_PROFILE: 'complete profile clicked',
    FIN_INT_CHOSEN: 'Fin Interest Chosen',
    CHANGE_COMPANY: 'Client company changed on db'
  },
  dashboard: {
    FUNDING_OPTIONS_CLICK: '<Classic>.<SMEdashboard><fundingOptions><Button>',
    START_SWOOP_REVIEW: '<Classic>.<ProductPage><StartSwoopReview><Button>',
    SUBMIT_SWOOP_REVIEW: '<Classic>.<ProductPage><SubmitSwoopReview><Button>'
  },
  savingCheckout: {
    PHONE_TAB_CLICKED: 'phone tab clicked',
    REQUEST_PHONE_REVIEW: 'Savings CTA clicked',
    SAVINGS_TAB_CLICKED: 'Savings Tab Clicked',
    UTILITIES_TAB_CLICKED: 'utilities tab clicked',
    REQUEST_UTILITIES_REVIEW: 'utilities req review clicked',
    SUBMIT_PHONE_REVIEW: 'phone saving submit',
    DASH_SWITCH_CLICKED: 'Bank Widget start switch clicked',
    DETAIL_SWITCH_CLICKED: 'Bank detail start switch clicked',
    PERFORMANCE_SWITCH_CLICKED: 'performance details page start switch clicked',
    SWITCH_START_NEXT_CLICKED: 'Bank Before U Switch click next',
    CHOOSE_BANK_NEXT_CLICKED: 'Bank Choose New click next',
    CHOOSE_BANK_BACK_CLICKED: 'Bank Choose New click back',
    ELIGIBILITY_NEXT_CLICKED: 'Bank Check Eligibility click next',
    ELIGIBILITY_BACK_CLICKED: 'Bank Check Eligibility click back',
    STANDING_ORDERS_NEXT_CLICKED: 'Bank Standing orders click next',
    STANDING_ORDERS_BACK_CLICKED: 'Bank Standing orders click back',
    DOCUMENTS_NEXT_CLICKED: 'Bank gather doc click next',
    DOCUMENTS_BACK_CLICKED: 'Bank gather doc click back',
    SWITCH_DATE_NEXT_CLICKED: 'Switch date page next clicked',
    SWITCH_DATE_BACK_CLICKED: 'Switch date page back clicked',
    REVIEW_PAGE_START_CLICKED: 'Review page start switch clicked',
    REVIEW_PAGE_BACK_CLICKED: 'Review page back clicked',
    SEE_MORE_CLICKED: 'DashW bank switch see more clicked',
    COMPARE_CLICKED: 'Compare to other banks clicked',
    VIEW_BANKS_DETAILS: 'Bank Switch Widget Views details',
    SEE_FULL_INFO: 'Bank Switch Product Details Clicked',
    DOWNLOAD_BANK_STAT: 'download bank statements clicked',
    SAVINGS_CTA_CLICKED: 'Savings CTA clicked',
    MAKE_IT_CHEAPER: 'Make it cheaper clicked',
    SAVINGS_SUBMITTED: 'Savings Submitted'
  },
  savingsOnboarding: {
    CHOOSE_SAVING_CATEGORIES: 'choose saving categories',
    BEGIN_COST_SAVING: 'begin cost saving'
  },
  fundingCheckout: {
    TOP_NAV_MATCHES_CLICKED: 'top nav matches clicked',
    WIDGET_MATCHES_CLICKED: 'DashW Top Fund Result Clicked',
    WIDGET_SEE_MORE_CLICKED: 'DashW See More Fund Prod Clicked',
    VIEW_MATCH_DETAILS: 'Product Details Clicked',
    APPLY_FOR_PRODUCT: 'Submit Funding App',
    UPLOAD_DOCS: 'Upload Docs Clicked'
  },
  pageViews: {
    SIGNUP: 'PV: SignUp',
    LOGIN: 'PV: Login',
    COMPANY_NAME: 'PV: Company Name',
    FINANCE_INTEREST: 'PV Finance Interest',
    TRUELAYER: 'PV: Truelayer Callback',
    CODAT: 'PV: Codat Callback',
    FUNDING_REQS: 'PV: Funding Reqs',
    COMPANY_INFO: 'PV: Company Info',
    COMPANY_FIN_DATA: 'PV: Company Fin Data',
    DOCUMENTS: 'PV: Documents',
    DASHBOARD: 'PV: Dashboard',
    MATCHES_LIST: 'PV: Matches List',
    MATCH_DETAILS: 'PV: Match Details',
    DEALS_LIST: 'PV: Deals List',
    DEAL_DETAILS: 'PV: Deal Details',
    NOTIFICATIONS: 'PV: Notifications',
    NOTIFICATION_DETAILS: 'PV: Notification Details',
    BANK_ACC_COMPA: 'PV: Bank Account Details',
    PERFORMANCE_DETAILS: 'PV: Bank Accounts List',
    SWITCH: 'PV: Bank Account Switch'
  },
  businessOnboarding: {
    CREATE_USER: '<Classic>.<Business><BusinessSignupPage><CreateUser>',
    ALREADY_SIGNUP: '<Classic>.<Business><BusinessSignupPage><AlreadySignedUp>',
    CHOOSE_USER_TYPE: '<Classic>.<SME><CustomerType><BusinessButton>',
    COMPANY_INFO_NEXT: '<Classic>.<Business><CompanyInformation><Next><Button>',
    COMPANY_INFO_BACK: '<Classic>.<Business><CompanyInformation><Back><Button>',
    DIRECTORS_NEXT: '<Classic>.<Business><Directors><Next><Button>',
    DIRECTORS_BACK: '<Classic>.<Business><Directors><Back><Button>',
    INTEGRATE_ACC_SKIP: '<Classic>.<Business><IntegrateAccounting><Skip><Button>',
    INTEGRATE_ACC_NEXT: '<Classic>.<Business><IntegrateAccounting><Next><Button>',
    INTEGRATE_ACC_BACK: '<Classic>.<Business><IntegrateAccounting><Back><Button>',
    INTEGRATE_ACC_CONFIRM_SKIP: '<Classic>.<Business><IntegrateAccounting><ConfirmSkip><Button>',
    INTEGRATE_ACC_CONFIRM_CANCEL: '<Classic>.<Business><IntegrateAccounting><ConfirmCancel><Button>',
    INTEGRATE_ACC_ACCOUNTING: '<Classic>.<Business><IntegrateAccounting><LinkAccountingSoftware><Button>',
    INTEGRATE_ACC_BANK: '<Classic>.<Business><IntegrateAccounting><ConnectBank><Button>',
    UPLOAD_DOCUMENTS_SKIP: '<Classic>.<Business><UploadDocuments><Skip><Button>',
    UPLOAD_DOCUMENTS_BACK: '<Classic>.<Business><UploadDocuments><Back><Button>',
    UPLOAD_DOCUMENTS_NEXT: '<Classic>.<Business><UploadDocuments><Next><Button>',
    UPLOAD_DOCUMENTS_BANK_STATEMENTS: '<Classic>.<Business><UploadDocuments><BankStatements><Upload>',
    UPLOAD_DOCUMENTS_MANAGEMENT_ACCOUNTS: '<Classic>.<Business><UploadDocuments><ManagamentAccounts><Upload>',
    UPLOAD_DOCUMENTS_FIELD_ACCOUNTS: '<Classic>.<Business><UploadDocuments><FieldAccounts><Upload>',
    UPLOAD_DOCUMENTS_VAT_RETURNS: '<Classic>.<Business><UploadDocuments><VATReturns><Upload>',
    UPLOAD_DOCUMENTS_DIRECTORS_ID: '<Classic>.<Business><UploadDocuments><DirectorsID><Upload>',
    UPLOAD_DOCUMENTS_ADDRESS_PROOF: '<Classic>.<Business><UploadDocuments><AddressProof><Upload>',
    UPLOAD_DOCUMENTS_CONFIRM_SKIP: '<Classic>.<Business><ConfirmSkip><SkipAnyway><Button>',
    UPLOAD_DOCUMENTS_CONFIRM_CANCEL: '<Classic>.<Business><ConfirmSkip><CancelSkip><Button>',
    LOANS_FUNDING_REQUIREMENT_NEXT: '<Classic>.<Business><DebtFundingRequirement><Next><Button>',
    LOANS_FUNDING_REQUIREMENT_BACK: '<Classic>.<Business><DebtFundingRequirement><Back><Button>',
    EQUITY_FUNDING_REQUIREMENT_NEXT: '<Classic>.<Business><EquityRequirement><Next><Button>',
    EQUITY_FUNDING_REQUIREMENT_BACK: '<Classic>.<Business><EquityRequirement><Back><Button>',
    GRANTS_FUNDING_REQUIREMENT_NEXT: '<Classic>.<Business><GrantFundingRequirement><Next><Button>',
    GRANTS_FUNDING_REQUIREMENT_BACK: '<Classic>.<Business><GrantFundingRequirement><Back><Button>',
    ALL_FUNDING_REQUIREMENT_NEXT: '<Classic>.<Business><AllFundingRequirement><Next><Button>',
    ALL_FUNDING_REQUIREMENT_BACK: '<Classic>.<Business><GrantFundingRequirement><Back><Button>',
    COMPANY_DETAILS_NEXT: '<Classic>.<Business><CompanyDetails><Next><Button>',
    COMPANY_DETAILS_BACK: '<Classic>.<Business><CompanyDetails><Back><Button>',
    FINANCIAL_INFO_NEXT: '<Classic>.<Business><FinancialInfo><Next><Button>',
    FINANCIAL_INFO_BACK: '<Classic>.<Business><FinancialInfo><Back><Button>'
  },
  advisorOnboarding: {
    CREATE_USER: '<Classic>.<Advisor><AdvisorSignupPage><CreateUser>',
    ALREADY_SIGNUP: '<Classic>.<Advisor><AdvisorSignupPage><AlreadySignedUp>',
    CHOOSE_USER_TYPE: '<Classic>.<SME><CustomerType><AdvisorButton>',
    COMPLETE_ACCOUNT: '<Classic>.<Advisor><AccountDetails><CompleteAccount><Button>',
    ADVISOR_INFORMATION: '<Classic>.<Advisor><AdvisorInfromation><Next><Button>',
    ADD_NEW_BUSINESS_DASHBOARD: '<Classic>.<Advisor><Dashboard><dashboard><AddNewBusiness>',
    START_ONBOARDING: '<Classic>.<Advisor><Dashboard><StartOnboarding><Button>',
    BATCH_UPLOAD: '<Classic>.<Advisor><Dashboard><BatchUpload><Button>',
    BATCH_UPLOAD_SUBMIT: '<Classic>.<Advisor><BulkUploader><Submit><Button>',
    ADD_NEW_BUSINESS: '<Classic>.<Advisor><Dashboard><AddNewBusiness><Button>',
    COMPANY_INFO_NEXT: '<Classic>.<Advisor><CompanyInformation><Next><Button>',
    COMPANY_INFO_BACK: '<Classic>.<Advisor><CompanyInformation><Back><Button>',
    DIRECTORS_NEXT: '<Classic>.<Advisor><Directors><Next><Button>',
    DIRECTORS_BACK: '<Classic>.<Advisor><Directors><Back><Button>',
    INTEGRATE_ACC_SKIP: '<Classic>.<Advisor><IntegrateAccounting><Skip><Button>',
    INTEGRATE_ACC_NEXT: '<Classic>.<Advisor><IntegrateAccounting><Next><Button>',
    INTEGRATE_ACC_BACK: '<Classic>.<Advisor><IntegrateAccounting><Back><Button>',
    INTEGRATE_ACC_CONFIRM_SKIP: '<Classic>.<Advisor><IntegrateAccounting><ConfirmSkip><Button>',
    INTEGRATE_ACC_CONFIRM_CANCEL: '<Classic>.<Advisor><IntegrateAccounting><ConfirmCancel><Button>',
    INTEGRATE_ACC_ACCOUNTING: '<Classic>.<Advisor><IntegrateAccounting><LinkAccountingSoftware><Button>',
    INTEGRATE_ACC_BANK: '<Classic>.<Advisor><IntegrateAccounting><ConnectBank><Button>',
    UPLOAD_DOCUMENTS_SKIP: '<Classic>.<Advisor><UploadDocuments><Skip><Button>',
    UPLOAD_DOCUMENTS_BACK: '<Classic>.<Advisor><UploadDocuments><Back><Button>',
    UPLOAD_DOCUMENTS_NEXT: '<Classic>.<Advisor><UploadDocuments><Next><Button>',
    UPLOAD_DOCUMENTS_BANK_STATEMENTS: '<Classic>.<Advisor><UploadDocuments><BankStatements><Upload>',
    UPLOAD_DOCUMENTS_MANAGEMENT_ACCOUNTS: '<Classic>.<Advisor><UploadDocuments><ManagamentAccounts><Upload>',
    UPLOAD_DOCUMENTS_FIELD_ACCOUNTS: '<Classic>.<Advisor><UploadDocuments><FieldAccounts><Upload>',
    UPLOAD_DOCUMENTS_VAT_RETURNS: '<Classic>.<Advisor><UploadDocuments><VATReturns><Upload>',
    UPLOAD_DOCUMENTS_DIRECTORS_ID: '<Classic>.<Advisor><UploadDocuments><DirectorsID><Upload>',
    UPLOAD_DOCUMENTS_ADDRESS_PROOF: '<Classic>.<Advisor><UploadDocuments><AddressProof><Upload>',
    UPLOAD_DOCUMENTS_CONFIRM_SKIP: '<Classic>.<Advisor><ConfirmSkip><SkipAnyway><Button>',
    UPLOAD_DOCUMENTS_CONFIRM_CANCEL: '<Classic>.<Advisor><ConfirmSkip><CancelSkip><Button>',
    LOANS_FUNDING_REQUIREMENT_NEXT: '<Classic>.<Advisor><DebtFundingRequirement><Next><Button>',
    LOANS_FUNDING_REQUIREMENT_BACK: '<Classic>.<Advisor><DebtFundingRequirement><Back><Button>',
    EQUITY_FUNDING_REQUIREMENT_NEXT: '<Classic>.<Advisor><EquityRequirement><Next><Button>',
    EQUITY_FUNDING_REQUIREMENT_BACK: '<Classic>.<Advisor><EquityRequirement><Back><Button>',
    GRANTS_FUNDING_REQUIREMENT_NEXT: '<Classic>.<Advisor><GrantFundingRequirement><Next><Button>',
    GRANTS_FUNDING_REQUIREMENT_BACK: '<Classic>.<Advisor><GrantFundingRequirement><Back><Button>',
    ALL_FUNDING_REQUIREMENT_NEXT: '<Classic>.<Advisor><AllFundingRequirement><Next><Button>',
    ALL_FUNDING_REQUIREMENT_BACK: '<Classic>.<Advisor><GrantFundingRequirement><Back><Button>',
    COMPANY_DETAILS_NEXT: '<Classic>.<Advisor><CompanyDetails><Next><Button>',
    COMPANY_DETAILS_BACK: '<Classic>.<Advisor><CompanyDetails><Back><Button>',
    FINANCIAL_INFO_NEXT: '<Classic>.<Advisor><FinancialInfo><Next><Button>',
    FINANCIAL_INFO_BACK: '<Classic>.<Advisor><FinancialInfo><Back><Button>'
  },
  natWestSMEGrants: {
    CALCULATOR_TILE_CLICK: 'Nat Calculator result cta clicked',
    LANDING_PAGE_VIEW_GRANTS_FORM: 'Nat PV Grants form',
    LANDING_PAGE_VIEW_GRANTS_MATCHES: 'Nat PV Grants matches',
    LANDING_PAGE_VIEW_TAX_SAVINGS_CALCULATOR: 'Nat PV Tax calculator landing page',
    TAX_SAVINGS_CALCULATOR_SUBMIT: 'Nat Tax calculator submit',
    LANDING_PAGE_VIEW: '<Natwest><SME><GrantsLandingpage><PageView>',
    LANDING_PAGE_CTA: '<Natwest><SME><GrantsLandingpage><Next><Button>',
    GRANTS_FORM_SUBMITTED: '<Natwest><SME><GrantsForm><Submit><Button>',
    GRANTS_PRODUCT_SELECTED: '<Natwest><SME><GrantsMatchingPage><SelectProduct><ProductTile>',
    GRANTS_MATCHES_SUPPORT_CLICK: 'Nat Further support clicked',
    GRANT_SIGN_UP: '<Natwest><SME><GrantsProduct><SignUp><Button>',
    GRANT_GO_TO_PROVIDER: '<Natwest><SME><GrantsProduct><GoToProvider><Button>'
  },
  AggregatorApi: {
    UNLOCK: 'ILO CTA Click',
    SUBMIT_FORM: 'ILO Form Submit',
    VIEW_PRODUCT: 'ILO Offers View',
    COMPLETE_CTA: 'ILO Product Accept',
    INSTANT_OFFER_RECEIVED: 'ILO Offers Received',
    INSTANT_OFFER_ERROR: 'ILO Offers Error',
    CLICK_TO_KNOWLEDGE_BASE: 'ILO Knowledge Hub View',
    USER_CLICK_ACCEPT: 'User Click Accept'
  },
  Matches: {
    MATCHES_PAGE_LOADS: 'PV Matches',
    INSTANT_OFFER_CTA: 'ILO CTA View'
  },
  CreditScore: {
    CLICK_CTA: 'CS CTA Click',
    CLICK_BANNER: 'CS Banner Click',
    DISMISS_BANNER: 'CS Banner Dismiss',
    PAGE_VIEW: 'CS Page View',
    CHC_PRODUCT_CLICK: 'CHC Product Click',
    CHC_PRODUCT_BANNER_CLICK: 'CHC Product Banner Click',
    CTA_HOW_IT_WORKS: 'CTA How it works',
    CS_PRO_CLICK: 'CS Pro Click',
    CTA_LINK_YOUR_BANK_DETAILS: 'CTA Link your bank details',
    CTA_REDIRECT_LINKS: 'CTA Redirect Links',
    CTA_DOWNLOAD_REPORT: 'CTA Download Report'
  },
  Illion: {
    POPUP_NOT_NOW: 'Illion popup dismiss',
    POPUP_NEVER_AGAIN: 'Illion popup never again',
    START_APPLICATION: 'Illion start application',
    IFRAME_BANK_SELECTED: 'Illion iframe bank selected',
    IFRAME_LOGIN_CLICKED: 'Illion iframe login clicked',
    IFRAME_ACCOUNT_SELECTED: 'Illion iframe account selected',
    IFRAME_SUBMISSION: 'Illion iframe submission clicked',
    IFRAME_COMPLETE: 'Illion completed'
  },
  Goals: {
    PAGE_VIEW: 'PV Goal Page',
    PROPERTY_MASTER_CLICKED: 'Property Master clicked'
  }
}

export const illionIframeEvents = {
  bank_selected: amplitudeEvents.Illion.IFRAME_BANK_SELECTED,
  login_clicked: amplitudeEvents.Illion.IFRAME_LOGIN_CLICKED,
  accounts_selected: amplitudeEvents.Illion.IFRAME_ACCOUNT_SELECTED,
  submission_complete: amplitudeEvents.Illion.IFRAME_SUBMISSION,
  submit_all: amplitudeEvents.Illion.IFRAME_COMPLETE
}

export const opportunitySpeedDic = {
  1: '< 1 week',
  2: '1 week - 1 month',
  3: '1 month - 3 months',
  4: '3 months - 6 months',
  5: '6 months+'
}

// The 'value' property matches the same values as pageMetadata.fundingPurposes.
export const goalsList = [
  {
    title: 'Business expansion',
    value: 7,
    redirect: 'loan-matches-form',
    icon: 'business_expansion.svg',
    type: 'loans',
    hidden: !whitelabel.components.goalsEnabled.businessExpansion
  },
  {
    title: 'Start a business',
    value: 2,
    redirect: 'loan-matches-form',
    icon: 'start_a_business.svg',
    type: 'loans',
    hidden: !whitelabel.components.goalsEnabled.startABusiness
  },
  {
    title: 'Improve cashflow',
    value: 5,
    redirect: 'loan-matches-form',
    icon: 'improve_cashflow.svg',
    type: 'loans',
    hidden: !whitelabel.components.goalsEnabled.improveCashflow
  },
  {
    title: 'Purchase stock',
    value: 10,
    redirect: 'loan-matches-form',
    icon: 'purchase_stock.svg',
    type: 'loans',
    hidden: !whitelabel.components.goalsEnabled.purchaseStock
  },
  {
    title: 'Find a grant',
    value: null,
    redirect: 'grant-matches-form',
    icon: 'find_a_business_grant.svg',
    type: 'grant',
    hidden: !whitelabel.components.goalsEnabled.findAGrant
  },
  {
    title: 'Asset finance',
    value: 12,
    redirect: 'loan-matches-form',
    icon: 'asset_finance.svg',
    type: 'loans',
    hidden: !whitelabel.components.goalsEnabled.assetFinance
  },
  {
    title: 'Property finance',
    value: null,
    redirect: 'property-finance',
    icon: 'property_finance.svg',
    type: 'loans',
    hidden: !whitelabel.components.goalsEnabled.propertyFinance
  },
  {
    title: 'Research & Development',
    value: 3,
    redirect: 'loan-matches-form',
    icon: 'research.svg',
    type: 'loans',
    hidden: !whitelabel.components.goalsEnabled.researchAndDevelopment
  },
  {
    title: 'Find an investor',
    value: null,
    redirect: 'equity-matches-form',
    icon: 'find_an_investor.svg',
    type: 'equity',
    hidden: !whitelabel.components.goalsEnabled.findAnInvestor
  },
  {
    title: 'Import/export finance',
    value: 4,
    redirect: 'loan-matches-form',
    icon: 'import_export_finance.svg',
    type: 'loans',
    hidden: !whitelabel.components.goalsEnabled.importExportFinance
  },
  {
    title: 'Debt refinance',
    value: 6,
    redirect: 'loan-matches-form',
    icon: 'debt_refinance.svg',
    type: 'loans',
    hidden: !whitelabel.components.goalsEnabled.debtRefinance
  },
  {
    title: 'Acquire a business',
    value: 8,
    redirect: 'loan-matches-form',
    icon: 'acquire_a_business.svg',
    type: 'loans',
    hidden: !whitelabel.components.goalsEnabled.acquireABusiness
  }
]

export const productsAndGoalsDeepLinks = {
  'aggregator-loan': 'loan-matches-form',
  loans: 'loan-matches-form',
  equity: 'equity-matches-form',
  grants: 'grant-matches-form',
  'credit-score': 'credit-health-check',
  'loan-matches': 'loan-matches',
  'property-finance': 'property-finance'
}
