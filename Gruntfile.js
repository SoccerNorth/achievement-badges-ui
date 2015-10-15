// @version 1.0.0
//
// @copyright (c) 2015 SoccerNorth
//
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt)
{

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist',
        build: '.build/'
    };

    // Define the configuration for all the tasks
    grunt.initConfig(
        {

            // Project settings
            yeoman: appConfig,

            // Watches files for changes and runs tasks based on the changed files
            watch: {
                bower: {
                    files: ['bower.json'],
                    tasks: ['wiredep']
                },
                js: {
                    files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                    tasks: ['newer:jshint:all'],
                    options: {
                        livereload: '<%= connect.options.livereload %>'
                    }
                },
                jsTest: {
                    files: ['test/spec/{,*/}*.js'],
                    tasks: ['newer:jshint:test', 'karma']
                },
                styles: {
                    files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                    tasks: ['newer:copy:styles', 'autoprefixer']
                },
                gruntfile: {
                    files: ['Gruntfile.js']
                },
                livereload: {
                    options: {
                        livereload: '<%= connect.options.livereload %>'
                    },
                    files: [
                        '<%= yeoman.app %>/{,*/}*.html',
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg,ico}'
                    ]
                }
            },

            // The actual grunt server settings
            connect: {
                options: {
                    port: 9000,
                    // Change this to '0.0.0.0' to access the server from outside.
                    hostname: 'localhost',
                    livereload: 35729
                },
                livereload: {
                    options: {
                        open: true,
                        middleware: function (connect)
                        {
                            return [
                                connect.static('.tmp'),
                                connect().use(
                                    '/bower_components',
                                    connect.static('./bower_components')
                                ),
                                connect.static(appConfig.app)
                            ];
                        }
                    }
                },
                test: {
                    options: {
                        port: 9001,
                        middleware: function (connect)
                        {
                            return [
                                connect.static('.tmp'),
                                connect.static('test'),
                                connect().use(
                                    '/bower_components',
                                    connect.static('./bower_components')
                                ),
                                connect.static(appConfig.app)
                            ];
                        }
                    }
                },
                dist: {
                    options: {
                        open: true,
                        base: '<%= yeoman.dist %>'
                    }
                }
            },

            // Make sure code styles are up to par and there are no obvious mistakes
            jshint: {
                options: {
                    jshintrc: '.jshintrc',
                    reporter: require('jshint-stylish')
                },
                all: {
                    src: [
                        'Gruntfile.js',
                        '<%= yeoman.app %>/scripts/{,*/}*.js'
                    ]
                },
                test: {
                    options: {
                        jshintrc: 'test/.jshintrc'
                    },
                    src: ['test/spec/{,*/}*.js']
                }
            },

            // Empties folders to start fresh
            clean: {
                dist: {
                    files: [
                        {
                            dot: true,
                            src: [
                                '.tmp',
                                '<%= yeoman.dist %>/{,*/}*',
                                '!<%= yeoman.dist %>/.git*'
                            ]
                        }
                    ]
                },
                build: {
                    files: [
                        {
                            dot: true,
                            src: [
                                '.tmp',
                                '<%= yeoman.build %>/{,*/}*',
                                '!<%= yeoman.build %>/.git*'
                            ]
                        }
                    ]
                },
                server: '.tmp'
            },

            // Add vendor prefixed styles
            autoprefixer: {
                options: {
                    browsers: ['last 1 version']
                },
                dist: {
                    files: [
                        {
                            expand: true,
                            cwd: '.tmp/styles/',
                            src: '{,*/}*.css',
                            dest: '.tmp/styles/'
                        }
                    ]
                }
            },

            // Renames files for browser caching purposes
            filerev: {
                build: {
                    src: [
                        '<%= yeoman.build %>/scripts/{,*/}*.js',
                        '<%= yeoman.build %>/styles/{,*/}*.css',
                        //'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.build %>/styles/fonts/*'
                    ]
                }
            },

            // Reads HTML for usemin blocks to enable smart builds that automatically
            // concat, minify and revision files. Creates configurations in memory so
            // additional tasks can operate on them
            useminPrepare: {
                html: [
                    '<%= yeoman.app %>/*.html'
                ],
                options: {
                    dest: '<%= yeoman.build %>',
                    flow: {
                        html: {
                            steps: {
                                js: ['concat', 'uglifyjs'],
                                css: ['cssmin']
                            },
                            post: {}
                        }
                    }
                }
            },

            // Performs rewrites based on filerev and the useminPrepare configuration
            usemin: {
                html: ['<%= yeoman.build %>/{,*/}*.html'],
                css: ['<%= yeoman.build %>/styles/{,*/}*.css'],
                options: {
                    assetsDirs: ['<%= yeoman.build %>', '<%= yeoman.dist %>/images']
                }
            },

            pkg: grunt.file.readJSON('package.json'),

            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */',
                    preserveComments: false
                }
            },

            imagemin: {
                dist: {
                    files: [
                        {
                            expand: true,
                            cwd: '<%= yeoman.app %>/images',
                            src: '{,*/}*.{png,jpg,jpeg,gif}',
                            dest: '<%= yeoman.dist %>/images'
                        }
                    ]
                }
            },

            svgmin: {
                dist: {
                    files: [
                        {
                            expand: true,
                            cwd: '<%= yeoman.app %>/images',
                            src: '{,*/}*.svg',
                            dest: '<%= yeoman.dist %>/images'
                        }
                    ]
                }
            },

            htmlmin: {
                build: {
                    options: {
                        removeComments: true,
                        collapseWhitespace: true,
                        conservativeCollapse: true,
                        collapseBooleanAttributes: true,
                        removeCommentsFromCDATA: true,
                        removeOptionalTags: true
                    },
                    files: [
                        {
                            expand: true,
                            cwd: '<%= yeoman.build %>',
                            src: ['*.html', 'views/{,*/}*.html'],
                            dest: '<%= yeoman.build %>'
                        }
                    ]
                }
            },

            // ng-annotate tries to make the code safe for minification automatically
            // by using the Angular long form for dependency injection.
            ngAnnotate: {
                build: {
                    files: [
                        {
                            expand: true,
                            cwd: '.tmp/concat/scripts',
                            src: ['*.js', '!oldieshim.js'],
                            dest: '.tmp/concat/scripts'
                        }
                    ]
                }
            },

            // Replace Google CDN references
            cdnify: {
                dist: {
                    html: ['<%= yeoman.dist %>/*.html']
                }
            },

            // Copies remaining files to places other tasks can use
            copy: {
                build: {
                    files: [
                        {
                            expand: true,
                            dot: true,
                            cwd: '<%= yeoman.app %>',
                            dest: '<%= yeoman.build %>',
                            src: [
                                '*.{ico,png,txt}',
                                '.htaccess',
                                '*.html',
                                'views/{,*/}*.html',
                                'images/*.{png,jpg,jpeg,gif,webp,svg,ico}', // NOTE: copy main-library-js images first
                                'fonts/*',
                                'data/*.json'
                            ]
                        },
                        {
                            expand: true,
                            cwd: '.tmp/images',
                            dest: '<%= yeoman.build %>/images',
                            src: ['generated/*']
                        },
                        {
                            expand: true,
                            cwd: '<%= yeoman.app %>/bower_components/bootstrap/dist',
                            src: 'fonts/*',
                            dest: '<%= yeoman.build %>'
                        },
                        {
                            expand: true,
                            cwd: '<%= yeoman.app %>/bower_components/font-awesome/',
                            src: 'fonts/*',
                            dest: '<%= yeoman.build %>'
                        }
                    ]
                },
                dist: {
                    files: [
                        {
                            expand: true,
                            cwd: '<%= yeoman.build %>',
                            src: '**/*',
                            dest: '<%= yeoman.dist %>'
                        }
                    ]
                },
                styles: {
                    expand: true,
                    cwd: '<%= yeoman.app %>/styles',
                    dest: '.tmp/styles/',
                    src: '{,*/}*.css'
                }
            },

            // Run some tasks in parallel to speed up the build process
            concurrent: {
                server: [
                    'copy:styles'
                ],
                test: [
                    'copy:styles'
                ],
                build: [
                    'copy:styles',
                    //'imagemin',
                    'svgmin'
                ]
            },

            // Test settings
            karma: {
                unit: {
                    configFile: 'test/karma.conf.js',
                    singleRun: true
                }
            }
        }
    );


    grunt.registerTask(
        'serve', 'Compile then start a connect web server', function (target)
        {
            if (target === 'dist') {
                return grunt.task.run(['build', 'connect:dist:keepalive']);
            }

            grunt.task.run(
                [
                    'clean:server',
                    //'wiredep',
                    'concurrent:server',
                    'autoprefixer',
                    'connect:livereload',
                    'watch'
                ]
            );
        }
    );

    grunt.registerTask(
        'server', 'DEPRECATED TASK. Use the "serve" task instead', function (target)
        {
            grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
            grunt.task.run(['serve:' + target]);
        }
    );

    grunt.registerTask(
        'test', [
            'clean:server',
            'concurrent:test',
            'autoprefixer',
            'connect:test',
            'karma'
        ]
    );

    grunt.registerTask(
        'build', [
            'clean:build',
            //'wiredep',
            'useminPrepare',
            'concurrent:build',
            'autoprefixer',
            'concat',
            'ngAnnotate',
            'copy:build',
            //'cdnify',
            'cssmin',
            'uglify',
            'filerev',
            'usemin',
            'htmlmin',
            'clean:dist',
            'copy:dist'
        ]
    );

    grunt.registerTask(
        'default', [
            'newer:jshint',
            'test',
            'build'
        ]
    );
};
