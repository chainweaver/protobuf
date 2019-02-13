#!/bin/sh

node /api2html/bin/api2html.js -o openapi/btc/openapi.html -l shell,go,javascript,javascript--nodejs,ruby,python,java openapi/btc/openapi.yaml
node /api2html/bin/api2html.js -o openapi/eth/openapi.html -l shell,go,javascript,javascript--nodejs,ruby,python,java openapi/eth/openapi.yaml