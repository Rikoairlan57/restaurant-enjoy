/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
const { setHeadlessWhen } = require("@codeceptjs/configure");

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "e2e/**/*.spec.js",
  output: "e2e/outputs",
  helpers: {
    Puppeteer: {
      url: "http://localhost:9000",
      show: true,
      windowSize: "1200x900",
    },
  },
  include: {
    I: "./steps_file.js",
  },
  name: "restaurant-apps",
  bootstrap: null,
  mocha: {},
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
