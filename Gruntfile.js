module.exports = function(grunt) {

  var path = require('path');
  console.log(path);
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      dist: {
        src: 'dist/styles/main.css'
      }
    },

    bower: {
      install: {
        options: {
          targetDir: 'dist/scripts/vendor',
          cleanup: true
        }
      }
    },

    clean: {
      bower: ['public']
    },

    connect: {
      server: {
        options: {
          port: 6666,
          base: 'dist/',
          liveReload: true,
          hostname: '*'
        }
      }
    },
    copy: {
      scripts: {
        expand: true,
        cwd: 'src/scripts/',
        src: '*.js',
        dest: 'dist/scripts/'
      }
    },

    jade: {
      compile: {
        files: {
          'dist/index.html':'src/templates/index.jade'
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js','src/scripts/*.js'],
      scripts: ['src/scripts/*.js']
    },

    sass: {
      dist: {
        files: {
          'dist/styles/main.css':'src/styles/main.scss'
        }
      }
    },

    watch: {
      scripts: {
        files: ['Gruntfile.js','src/scripts/*.js'],
        tasks: ['jshint','copy'],
        options: {
          livereload: true
        }
      }, 
      styles: {
        files: ['src/styles/*.scss'],
        tasks: ['sass','autoprefixer'],
        options: {
          livereload: true
        }
      },
      templates: {
        files: ['src/templates/*.jade'],
        tasks: ['jade'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('default',[]);
  grunt.registerTask('lint',['jshint']);
  grunt.registerTask('build');
  grunt.registerTask('go',['connect','watch']);


};
