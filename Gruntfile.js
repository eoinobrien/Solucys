'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'css/**/*',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'css/app.css': 'css/app.sass'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'js/**/*.js',
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};
