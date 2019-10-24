#!/bin/sh

export SLACK_WEBHOOK_URL="https://hooks.slack.com/services/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"

export CI_SHA1=""
export CIRCLE_BRANCH="master"
export CI_USERNAME=""
export CI_BUILD_URL=""
export CI_BUILD_NUM=""
export CI_PULL_REQUEST=""
export CI_PROJECT_REPONAME=""
export CI_PROJECT_USERNAME=""
export CI_URL="https://circleci.com/api/v1.1/project"
export CIRCLE_JOB="Default job"

#delete directory
echo $(tput setaf 2)$(tput bold)$'\n'Cleaning up old reports...$(tput sgr 0)
#npm run cleanup

#run specific test
echo $(tput setaf 2)$(tput bold)Running Tests....$(tput sgr 0)
#npm run spec_test:nav
#npm run spec_test:suka

#generate report
echo $(tput setaf 2)$(tput bold)Generate report....$(tput sgr 0)
#npm run merge_reports && npm run generate_mochawesome_report

#post slack message
echo $(tput setaf 2)$(tput bold)Posting slack message....$(tput sgr 0)
npx cypress-slack-reporter --ci-provider circleci --vcs-provider github --report-dir mochawesomereport --verbose

read
