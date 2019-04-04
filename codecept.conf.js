exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriverIO: {               // which backend helper to use
     url: 'http://app:3000',    // a base URL to start on
     host: 'selenium-hub',
     browser: 'chrome'
   }
  },
  translation: './ja-SR.js',
  plugins: {
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
    },
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'tests'
}
