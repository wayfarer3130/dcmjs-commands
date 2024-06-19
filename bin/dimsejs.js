#!/usr/bin/env node
import { Command } from 'commander';
import { readDicom, instanceDicom, dumpDicom } from '../src/index.js';

const program = new Command();

program
  .name('dimse')
  .description('dimsejs based tools for running dimse commands')
  .version('0.0.1')

program.command('study')
  .description('Query for studies')
  .argument('aeName', 'AE to query')
  // .option('-s, --separator <char>', 'separator character', ',')
  .action(async (fileName, _options) => {
    const dicomDict = readDicom(fileName);
    dumpDicom(dicomDict);
  });


program.parse();