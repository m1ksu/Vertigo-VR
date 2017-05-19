module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        pug: {
            compile: {
                options: {
                    pretty: false
                },

                files: {
                    'index.html': ['src/index.pug'],
                    'contact.html': ['src/contact.pug'],
                    'portfolio.html': ['src/portfolio.pug']
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'style.min.css': 'src/style.sass'
                }
            }
        },

        watch: {
            pug: {
                files: ['src/index.pug', 'src/portfolio.pug', 'src/contact.pug'],
                tasks: ['pug']
            },
            sass: {
                files: ['src/style.sass'],
                tasks: ['sass']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-autoprefixer');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};