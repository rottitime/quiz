#!/bin/bash
git pull
npm update
touch tmp/restart.txtgit add .

echo "POST PROD JOB EXECUTED AND COMPLETED"