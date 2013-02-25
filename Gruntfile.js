'use strict';

var path = require('path');


module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        express: {
            livereload: {
                options: {
                    port: 9000,
                    bases: path.resolve('public'),
                    keepalive: true,
                    supervisor: true,
                    server: path.resolve('./app/server')
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: ['lib/**/*.js']
            },
            test: {
                src: ['test/**/*.js']
            },
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            // lib: {
            //     files: '<%= jshint.lib.src %>',
            //     tasks: ['jshint:lib', 'nodeunit']
            // },
            // test: {
            //     files: '<%= jshint.test.src %>',
            //     tasks: ['jshint:test', 'nodeunit']
            // },
        },
        jsbeautifier: {
            files: ['Gruntfile.js'],
            options: {
                'indent_size': 4,
                'indent_char': ' ',
                'indent_level': 0,
                'indent_with_tabs': false,
                'preserve_newlines': true,
                'max_preserve_newlines': 10,
                'jslint_happy': false,
                'brace_style': 'collapse',
                'keep_array_indentation': false,
                'keep_function_indentation': false,
                'space_before_conditional': true,
                'eval_code': false,
                'indent_case': false,
                'unescape_strings': false
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-express');

    grunt.registerTask('format', ['jshint', 'jsbeautifier']);
    grunt.registerTask('server', ['express', 'watch']);
    // Default task.
    grunt.registerTask('default', ['format', 'server']);

};