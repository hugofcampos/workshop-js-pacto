module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['index.js']
        }
      }
    },
    jslint: { // configure the task
      // lint your project's client code
      client: {
        src: [
          'index.js'
        ],
        directives: {
          browser: true,
          predef: [
            'jQuery'
          ]
        },
        options: { }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "jsLint" task.
  grunt.loadNpmTasks('grunt-jslint');

  // Default task(s).
  grunt.registerTask('default', ['jslint', 'uglify']);

};