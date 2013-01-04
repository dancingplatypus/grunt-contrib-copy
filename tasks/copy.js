/*
 * grunt-contrib-copy
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Chris Talkington, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-contrib-copy/blob/master/LICENSE-MIT
 */

module.exports = function(grunt) {
  'use strict';
  var fs = require('fs');

  grunt.registerMultiTask('copy', 'Copy files.', function() {

    var options = this.options({
      process: false,
      noProcess: [],
    });

    grunt.verbose.writeflags(options, 'Options');

    if (fs.lstatSync(this.file.src[0]).isDirectory()) {
      grunt.file.mkdir(this.file.dest);
    } else {
      grunt.file.copy(this.file.src[0], this.file.dest, options);
    }

  });
};