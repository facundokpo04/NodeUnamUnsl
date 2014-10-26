module.exports = function(grunt){
    //configuracion del proyecto
    grunt.initConfig({
        jshint:{
            all: ['main.js','gruntfiles.js']
        },
        concat: {
            dist:{
                src: ['main.js' , 'script1.js' , 'script2.js'],
                dest: 'unidos.js'
            }
        },
        uglify: {
            dist: {
                src: 'unidos.js',
                dest:'build/unidos.min.js'
            }
        },
        shell: {
            multiple: {
                command:[
                    'rm unidos.js',
                    'mkdir deploy',
                    'mv build/unidos.min.js deploy'
                ].join('&&')
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-shell')
    //tarea por defecto
    grunt.registerTask('default',['jshint','concat','uglify','shell']);
};