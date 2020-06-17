#!/bin/bash

if [ $# -ne 1 ];
then
    echo -e "Necessário informar a feature a ser executada: (nome da feature)\nExemplo: ./test.sh ijoin"
    exit 3
fi

AMBIENTE= ./node_modules/.bin/cucumber-js ./features/$1.feature -f json:./config/output/cucumber_report.json

node ./config/report.js
