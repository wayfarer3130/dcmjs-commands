#!/usr/bin/env node
const { Command } = require('commander');
const dcmjs = require('dcmjs');
const fs = require('fs');

const { DicomMessage } = dcmjs.data;

const program = new Command();

program
  .name('dcmjs')
  .description('dcmjs based tools for manipulation DICOM files')
  .version('0.0.1');

program.command('dump')
  .description('Dump a dicom file')
  .argument('<part10>', 'part 10 file to dump')
  // .option('-s, --separator <char>', 'separator character', ',')
  .action((fileName, _options) => {
    console.log("Dumping file 2", fileName);
    const arrayBuffer = fs.readFileSync(fileName).buffer;
    console.log("Read file of length", arrayBuffer.length);
    const dicomDict = DicomMessage.readFile(arrayBuffer);
    console.log("Metadata");
    console.log("", JSON.stringify(dicomDict.meta, null, 2));
    console.log("Data");
    console.log('', JSON.stringify(dicomDict.dict, null, 2));
  });

program.parse();