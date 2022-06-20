export default {
  features: {
    savings: true,
    creditPassportEnabled: true,
    creditScoreEnabled: true,
    creditScorePlusEnabled: true,
    loansEnabled: true,
    grantsEnabled: true,
    equityEnabled: true,
    linkAccountancy: true,
    linkBankAccount: true,
    linkBankAccountAdvisors: true,
    pitchDeckEnabled: true,
    signUpFreeTextCompany: false,
    noCompanySearch: false,
    footerSwoopLinkEnabled: false,
    swoopMarketingUrlEnabled: true,
    aggregatorEnabled: true,
    survicateEnabled: true,
    generateNewILO: true,
    signUpWithGoogleEnabled: false,
    integrationsEnabled: true
  },
  savingsServices: {
    amounts: false,
    fx: true,
    banking: true,
    utilities: true,
    overdraftFees: true,
    insurance: true
  },
  country: {
    defaultCountry: 'United Kingdom',
    defaultCountryCode2: 'GB',
    defaultLocaleString: 'en-GB',
    currency: {
      defaultCurrencySymbol: '£',
      defaultCurrencyName: 'GBP',
      defaultCurrencyFormat: {
        thousandsSeparator: ',',
        decimalsSeparator: '.'
      }
    }
  },
  journey: {
    defaultOnBoardingPage: 'select-goal',
    journeyHelperText: false,
    ignoreSignUpTypePage: true,
    advisorStepEnabled: true,
    classicJourneyEnabled: false,
    needHelpLinkEnabled: true,
    privacyPolicyLink: 'https://swoopfunding.com/privacy-policy',
    termsAndConditionsLink: 'https://swoopfunding.com/terms-conditions',
    requestCallbackEmail: '',
    classicJourney: [
      {
        name: 'journey-funding-requirements',
        description: 'Your funding requirements',
        enabled: true
      },
      {
        name: 'journey-integrate',
        description: 'Integrate your bank account',
        enabled: true
      },
      {
        name: 'journey-documents',
        description: 'Upload your documents',
        enabled: true
      },
      {
        name: 'journey-company',
        description: 'Your company details',
        enabled: true
      },
      {
        name: 'journey-financial-information',
        description: 'Your financial information',
        enabled: true
      }
    ]
  },
  signUp: {
    soleTraderSignupEnabled: true,
    countryRequired: true,
    marketingCards: true,
    extraQuestionsEnabled: false
  },
  components: {
    illionEnabled: false,
    howItWorksCodeOfEthicsEnabled: false,
    intercomEnabled: true,
    matchesContactBannerEnabled: false,
    goalsEnabled: {
      businessExpansion: true,
      startABusiness: true,
      improveCashflow: true,
      purchaseStock: true,
      findAGrant: true,
      assetFinance: true,
      propertyFinance: true,
      researchAndDevelopment: true,
      findAnInvestor: true,
      importExportFinance: true,
      debtRefinance: true,
      acquireABusiness: true
    }
  },
  companySearch: {
    soleTraderConfirmation: false,
    countryCode: true,
    cantFindCompany: true,
    allowAddCompanyNumber: true
  },
  savings: {
    tabs: true,
    potentialSavingsLink: 'https://swoopfunding.com/compare-business-current-account/?prev_page=app_BCA'
  },
  onboardingLeftPanel: {
    companiesLogoList: false
  },
  geometricBackground: {
    useAdvisorThemeOnSignUpPages: true,
    animatedBackground: true
  },
  forms: {
    states: false,
    provinces: false,
    hideMonthlyRecurringRevenue: false,
    hideHomeOwner: false,
    homeOwnerDefaultValue: false,
    currentlyBankOptions: [
      { label: 'AIB (UK)', value: 'AIB (UK)' },
      { label: 'AIB (IRE)', value: 'AIB (IRE)' },
      { label: 'Atom', value: 'Atom' },
      { label: 'Bank of Ireland (UK)', value: 'Bank of Ireland (UK)' },
      { label: 'Bank of Ireland (IRE)', value: 'Bank of Ireland (IRE)' },
      { label: 'Bank of Scotland', value: 'Bank of Scotland' },
      { label: 'Barclays', value: 'Barclays' },
      { label: 'Clydesdale Bank', value: 'Clydesdale Bank' },
      { label: 'Coconut', value: 'Coconut' },
      { label: 'Cynergy', value: 'Cynergy' },
      { label: 'C. Hoare & Co.', value: 'C. Hoare & Co.' },
      { label: 'Danske Bank (NI)', value: 'Danske Bank (NI)' },
      { label: 'First Direct', value: 'First Direct' },
      { label: 'First Trust (NI)', value: 'First Trust (NI)' },
      { label: 'Habib Bank Zurich', value: 'Habib Bank Zurich' },
      { label: 'Halifax', value: 'Halifax' },
      { label: 'KBC', value: 'KBC' },
      { label: 'HSBC', value: 'HSBC' },
      { label: 'Lloyds Bank', value: 'Lloyds Bank' },
      { label: 'M&S Bank', value: 'M&S Bank' },
      { label: 'Metro Bank', value: 'Metro Bank' },
      { label: 'Monzo', value: 'Monzo' },
      { label: 'NatWest', value: 'NatWest' },
      { label: 'RBS', value: 'RBS' },
      { label: 'Revolut', value: 'Revolut' },
      { label: 'Santander', value: 'Santander' },
      { label: 'Starling Bank', value: 'Starling Bank' },
      { label: 'The Co-operative Bank', value: 'The Co-operative Bank' },
      { label: 'Tide', value: 'Tide' },
      { label: 'TSB', value: 'TSB' },
      { label: 'Ulster Bank (UK)', value: 'Ulster Bank (UK)' },
      { label: 'Ulster Bank (IRE)', value: 'Ulster Bank (IRE)' },
      { label: 'Yorkshire Bank', value: 'Yorkshire Bank' },
      { label: 'Other', value: 'Other' }
    ]
  }
}
