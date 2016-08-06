module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dev: {
              files: [{
                expand: true,
                cwd: 'src/scss',
                src: ['*.scss'],
                dest: './public/assets/css/',
                ext: '.css'
                }]
            }
        },

        watch: {
          scripts: {
            files: ['src/**/*.js'],
            tasks: ['copy:js'],
            options: {
              spawn: false
            }
          },

          css: {
            files: 'src/**/*.scss',
            tasks: ['sass:dev']
          },

          html: {
            files: 'src/**/*.html',
            tasks: ['copy:html']
          }
        },

        copy: {
          html: {
            files: [
             {expand: true, cwd: 'src/', src: ['**/*.html'], dest: 'public/'}
            ]
          },
          js: {
            files: [
             {expand: true, cwd: 'src/js', src: ['**/*.js'], dest: 'public/assets/js'}
            ]
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

    grunt.registerTask('build', ['sass', 'copy']);
};
