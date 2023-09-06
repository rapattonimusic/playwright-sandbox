#!/bin/bash

job_number=$1
echo "Copying report files..."
mkdir -p playwright-report-publish/job$job_number
cp -R playwright-report/. playwright-report-publish/job$job_number
cp -R playwright-report/. playwright-report-publish/

echo "Committing and pushing report files..."
git config --global user.email "rapattonimusic@me.com"
git config --global user.name "rapattonimusic"
git add playwright-report-publish/
git commit -m "Add reports for job $job_number"
git push origin playwright-reports