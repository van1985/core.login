// Generated on 2015-04-27 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            'dist/{,*/}*',
            '!dist/.git{,*/}*'
          ]
        }]
      }     
    },

    concat: {
      dist: {
        // order is important
        src: [
          'module/module.js',
          'module/services/api/*.js',
          'module/services/*.js'
        ],
        dest: 'dist/<%= pkg.name %>.js',
      }         
    },

    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
        }
      }
    },

    wiredep: {
      test: {
        devDependencies: true,
        src: 'test/karma.conf.js',
        ignorePath:  /\.\.\//,
        fileTypes: {
          js: {
            block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'..\/{{filePath}}\','
            }
          }
        }
      }   
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }    
    }        

  });


  grunt.registerTask('build', [
    'clean:dist',
    'concat:dist',
    'uglify:dist'
  ]);

  grunt.registerTask('test', [ 
    'wiredep:test',
    'karma' 
  ]);

};
