module.exports = function(grunt) {
    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width:100,
                        height:70,
                        suffix:'_small_1x',
                        quality: 80
                    }, {
                        width:200,
                        height:140,
                        suffix:'_small_2x',
                        quality: 80
                    },{
                        width:150,
                        height:100,
                        suffix:'_small_1x',
                        quality: 80
                    },{
                        width:300,
                        height:200,
                        suffix:'_small_2x',
                        quality: 80
                    },{
                        width:549,
                        height:300,
                        suffix:'_large_1x',
                        quality: 80
                    },{
                        width:1098,
                        height:600,
                        suffix:'_large_2x',
                        quality: 80
                    }, {
                        width: 425,
                        height: 300,
                        suffix: '_medium_1x',
                        quality: 80
                    }, {
                        width:850,
                        height:600,
                        suffix:'_medium_2x',
                        quality: 80
                    }, {
                        rename: false,
                        width: 1080,
                        quality: 80
                    }]
                },
                files: [{
                    expand: true,
                    src: ['dog.jpg'],
                    cwd: 'images/',
                    dest: 'dist/'
                }]
            }
        },
        mkdir : {
            dev: {
                options: {
                    create: ['dist']
                }
            }
        },
        clean :{
            dev: {
                src: ['dist']
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');

    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);
};
