module.exports = function(grunt) {

    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
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
          src: ['*.css'],
          dest: 'build/styles',
          ext: '*.min.css'
        }]
      }
    },
    jshint: {
      all: ["Gruntfile.js", "src/scripts/*.js", "build/scripts/*.js"]
    },
    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
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

  grunt.registerTask('default', ["sass", "cssmin", "jshint", "jasmine"]);

};
