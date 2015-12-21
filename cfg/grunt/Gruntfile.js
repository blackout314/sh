module.exports = function(grunt) {
  // ---- Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      unit: {
        configFile: "karma.conf.js"
      }
    }
  });

  // ---- Load Tasks
  grunt.loadNpmTasks('grunt-karma');

  // ---- Define Tasks
  grunt.registerTask('test', ['karma:unit']);
};
