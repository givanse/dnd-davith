#!/bin/bash

set -e

npm install -g ember-cli
npm install -g bower
npm install -g phantomjs

npm install
bower install

exit
