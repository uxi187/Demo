const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './test-results/cucumber-json/',
    reportPath: './test-report/',
    metadata: {
        browser: {
            name: 'Chrome',
            version: '69'
        },
        device: 'Circle CI test machine',
        platform: {
            name: 'win',
            version: '10'
        }
    },
    customData: {
        title: 'Run tests',
        data: [
            { label: 'Project', value: 'Trainsmart project' }
        ]
    }
});