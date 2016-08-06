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

        copy: {
          html: {
            files: [
             {expand: true, cwd: 'src/', src: ['**/*.html'], dest: 'public/'},
            ],
          },
          js: {
            files: [
             {expand: true, cwd: 'src/js', src: ['**/*.js'], dest: 'public/assets/js'},
            ],
          },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['sass', 'copy']);
}
