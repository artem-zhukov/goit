module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
              files: [{
                expand: true,
                cwd: 'style',
                src: ['*.scss'],
                dest: 'style',
                ext: '.css'
              }]
            }
          },
          watch: {
            sass: {
              // We watch and compile sass files as normal but don't live reload here
              files: ['style/*.scss'],
              tasks: ['sass']
            }
          }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'watch']);
};
