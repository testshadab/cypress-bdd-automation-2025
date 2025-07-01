const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "cypress/cucumberReports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "131",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "windows 11 Pro",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Luma BDD project" },
      { label: "Release", value: "1st" },
    //   { label: "Cycle", value: "B11221.34321" },
    //   { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
    //   { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});