#!/bin/bash
pids=`lsof -i:3302 -t`
if [ "$pids" != "" ];
then
  kill -9 $pids
  echo "killed"
else
  echo "not run yet"
fi
git pull
npm i
nohup npm run dev &
echo "started"
