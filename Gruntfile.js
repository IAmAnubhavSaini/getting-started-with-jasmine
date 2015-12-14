module.exports = function(grunt) {

    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'build/styles/app.css': 'src/styles/app.scss'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/styles',
          src: ['*.css', "!*.scss"],
          dest: 'build/styles',
          ext: '.min.css',
          dot: 'last'
        }]
      }
    },
    jshint: {
      all: ["Gruntfile.js", "src/scripts/*.js", "build/scripts/*.js"]
    },
    jasmine: {
      pivotal: {
        src: 'src/scripts/*.js',
        options: {
          specs: 'spec/*.spec.js',
          helpers: 'spec/*.helper.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', ["sass", "cssmin", "jshint", "jasmine"]);

};
