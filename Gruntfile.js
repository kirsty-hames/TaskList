module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        less: {
            options:{
                compress:true
            },
            dist: {
                files: {
                    'css/app.css' : 'less/*.less'
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace:"Handlebars.templates",
                    processName: function(filePath) {
                        var newFilePath = filePath.split("/");
                        newFilePath = newFilePath[newFilePath.length - 1].replace(/\.[^/.]+$/, "");
                        return  newFilePath;
                    },
                    partialRegex: /.*/,
                    partialsPathRegex: /\/partials\//
                },
                files: {
                    'templates/templates.js': 'templates/*.hbs'
                }
            }
        },
        requirejs: {
            dev: {
                options: {
                    name: "js/app",
                    baseUrl: "",
                    mainConfigFile: "./config.js",
                    out: "js/app.min.js",
                    generateSourceMaps: true,
                    preserveLicenseComments:false,
                    optimize: "none"
                }
            },
            compile: {
                options: {
                    name: "js/app",
                    baseUrl: "",
                    mainConfigFile: "./config.js",
                    out: "js/app.min.js",
                    optimize:"uglify2"
                }
            }
        },
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less']
            },
            handlebars: {
                files: ['templates/*.hbs'],
                tasks: ['handlebars', 'compile']
            },
            js: {
                files: [
                    'js/*.js', 
                    '!js/app.min.js'
                ],
                tasks: ['compile']
            }
        },
        
        open: {
            server: {
                path: 'http://localhost:<%= connect.server.options.port %>/'
            }
        },

        concurrent: {
            server: ['connect:server', 'open:server', 'watch']
        },

        connect: {
            server: {
              options: {
                port: 5000,
                base: '',
                keepalive:true
              }
            }
        }
    });


    grunt.registerTask('default', ['less', 'handlebars', 'watch']);
    grunt.registerTask('compile', ['requirejs:dev']);
    grunt.registerTask('server', ['concurrent:server']);
    grunt.registerTask('build', ['less', 'handlebars', 'requirejs:compile']);
    grunt.registerTask('dev', ['less', 'handlebars', 'requirejs:dev']);
};