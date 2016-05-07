module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
            separator: ';'
            },
        dist:{
            src: 'js/src/*.js',
            dest: 'js/build/script.main.js',
          }
        },
        uglify: {
          build: {
              src: 'js/build/script.main.js',
              dest: 'js/build/script.main.min.js',
        }
      },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
        target: {
          files: {
            'css/build/main.css': ['css/src/*.css']
          },
        files:{
          'css/build/main.min.css': ['css/build/main.css']
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
