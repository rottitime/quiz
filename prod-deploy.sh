#!/bin/bash
git pull --rebase
npm update
touch tmp/restart.txt

echo "POST PROD JOB EXECUTED AND COMPLETED"