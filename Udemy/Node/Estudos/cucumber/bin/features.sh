#!/bin/bash
if [ $# -ne 1 ];
then
    echo -e "Necessário informar a feature a ser executada: (nome da feature)\nExemplo: ./test.sh ijoin"
    exit 3
fi

CMD=$(FEATURE=$1 node ./config/features.js)
eval $CMD
node ./config/report.js
