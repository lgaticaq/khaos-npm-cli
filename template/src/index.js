#!/usr/bin/env node

'use strict';

const program = require('commander');
// const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

updateNotifier({pkg}).notify();

program
  .version(pkg.version)
  .usage('')
  .description('{{description}}')
  .parse(process.argv);

program.help();
