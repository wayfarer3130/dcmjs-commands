#!/usr/bin/env node
import { Command } from 'commander';
import { readDicomWeb, instanceDicom, dumpDicom } from '../src/index.js';

const program = new Command();

program
  .name('dicomwebjs')
  .description('dicomwebjs based tools for manipulation of DICOMweb')
  .version('0.0.1')
  .options('--seriesUID <seriesUID>', 'For a specific seriesUID')

program.command('dump')
  .description('Dump a dicomweb file')
  .argument('<dicomwebUrl>', 'dicomweb URL or file location')
  // .option('-s, --separator <char>', 'separator character', ',')
  .action(async (fileName, _options) => {
    const dicomDict = readDicomWeb(fileName, options);
    dumpDicom(dicomDict);
  });

program.command('instance')
  .description('Write the instance data')
  .argument('<part10>', 'part 10 file')
  .option('-p, --pretty', 'Pretty print')
  .action(async (fileName, options) => {
    const dicomDict = readDicomWeb(fileName, options);
    instanceDicom(dicomDict, options);
  })


program.parse();