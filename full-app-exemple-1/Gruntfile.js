module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        // !! You can drop your app.build.js config wholesale into 'options'
        options: {
          appDir: "js/",
          baseUrl: ".",
          dir: "dist/",
          optimize: 'uglify',
          mainConfigFile:'./js/main.js',
          modules:[
            {
              name:'purchase'
            }
          ],
          logLevel: 0,
          findNestedDependencies: true,
          fileExclusionRegExp: /^\./,
          inlineText: true
        }
      }
    },
    jslint: { // configure the task
      // lint your project's client code
      client: {
        src: [
          'js/credits.js',
          'js/products.js',
          'js/purchase.js'
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

  // Load the plugin that provides the "requirejs" task.
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Load the plugin that provides the "jsLint" task.
  grunt.loadNpmTasks('grunt-jslint');

  // Default task(s).
  grunt.registerTask('default', ['jslint', 'requirejs']);

};