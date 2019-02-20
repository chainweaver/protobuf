#!/bin/sh

curl -O https://chainweaver.io/img/logo-white.png

node /api2html/bin/api2html.js \
  --out openapi/btc.html \
  --languages shell,go,javascript,javascript--nodejs,ruby,python,java \
  --customLogo logo-white.png \
  openapi/btc/openapi3.yaml

mkdir -p pub/css
touch pub/css/theme_override.css
node /api2html/bin/api2html.js \
  --out openapi/eth.html \
  --languages shell,go,javascript,javascript--nodejs,ruby,python,java \
  --customLogo logo-white.png \
  openapi/eth/openapi3.yaml

rm -f logo-white.png