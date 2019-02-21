#!/bin/bash

if [ $# -ne 1 ]; then
  echo "Requires at least 1 argument" 1>&2
  exit 1
fi

semVerRegex='[^0-9]*\([0-9]*\)[.]\([0-9]*\)[.]\([0-9]*\)\([0-9A-Za-z-]*\)'
if [ "$1" = "v" ]; then
  echo $CIRCLE_TAG | sed -e "s#$semVerRegex#\1#"
elif [ "$1" = "vv" ]; then
  echo $CIRCLE_TAG | sed -e "s#$semVerRegex#\1.\2#"
elif [ "$1" = "vvv" ]; then
  echo $CIRCLE_TAG | sed -e "s#$semVerRegex#\1.\2.\3#"
fi
