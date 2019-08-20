const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './cypress/results/cucumber-json/',
   reportPath: './cypress/results/',
   metadata:{
       browser: {
           name: 'chrome',
           version: '67'
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
           {label: 'Project', value: 'Trainsmart project'}
       ]
   }
});