const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: './output/cucumber_report.json',
    output: './output/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        'App Version': '1.0.0',
    },
};

reporter.generate(options);