#!/bin/bash
# git pull --rebase
npm update
touch tmp/restart.txt

cd client
npm update

echo "POST PROD JOB EXECUTED AND COMPLETED"