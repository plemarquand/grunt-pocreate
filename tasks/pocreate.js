/*
 * pocreate
 *
 *
 * Copyright (c) 2014 Paul LeMarquand
 * Licensed under the MIT license.
 */

'use strict';

var async = require('async');
var fs = require('fs');
var pocreate = require('pocreate');

module.exports = function(grunt) {
  function loadSource(files, callback) {
    async.reduce(files, {}, function(memo, file, cb) {
      fs.readFile(file, 'utf-8', function(err, contents) {
        memo[file] = contents;
        cb(err, memo);
      });
    }, callback);
  }

  grunt.registerMultiTask('pocreate', 'Create and update .po files from JavaScript', function() {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      add_comments: '/'
    });

    loadSource(this.filesSrc, function(err, sourceFiles) {
      loadSource(grunt.file.expand(options.pos), function(err, poFiles) {
        delete options.pos;
        var updatedPos = pocreate.parse(poFiles, sourceFiles, options);
        for(var filename in updatedPos) {
          grunt.file.write(filename, updatedPos[filename]);
        }
        done();
      });
    });
  });
};
