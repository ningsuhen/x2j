#!/usr/bin/env node

var xml2json = require('xml2json');

var xml = '';

process.stdin.on('data', function(data) {
  xml += data;
});

process.stdin.resume();

process.stdin.on('end', function() {
  json = xml2json.toJson(xml, {arrayNotation: true});
  process.stdout.write(json + '\n');
});
