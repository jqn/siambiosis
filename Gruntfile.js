module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'app/css/styles.css' : 'app/sass/styles.scss'
				}
			}
		},
		watch: {
			css: {
				files: 'app/sass/**/*.scss',
				tasks: ['sass'],
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
