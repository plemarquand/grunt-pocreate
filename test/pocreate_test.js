'use strict';

var grunt = require('grunt');

exports.pocreate = {
  default_options: function (test) {
    test.expect(2);

    var actual1 = grunt.file.read('tmp/test/fixtures/en.po');
    var expected1 = grunt.file.read('test/expected/en.po');
    var actual2 = grunt.file.read('tmp/test/fixtures/fr.po');
    var expected2 = grunt.file.read('test/expected/fr.po');
    test.equal(actual1, expected1, 'Didn\'t output the correct po contents.');
    test.equal(actual2, expected2, 'Didn\'t output the correct po contents.');
    test.done();
  }
};
