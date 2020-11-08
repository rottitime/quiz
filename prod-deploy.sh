#!/bin/bash
git pull --rebase
npm install --production
touch tmp/restart.txt

cd client
npm install --production

echo "POST PROD JOB EXECUTED AND COMPLETED"