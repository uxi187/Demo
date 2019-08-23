const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './test-results/cucumber-json/',
    reportPath: './cypress/test-report/',
    metadata: {
        browser: {
            name: 'Chrome',
            version: '69'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run tests',
        data: [
            { label: 'Project', value: 'Trainsmart project' }
        ]
    }
});