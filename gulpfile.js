var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var rubySass = require('gulp-ruby-sass');
var uglifyJs = require('gulp-uglify');

// 编译Sass
gulp.task('sass', function () {
    return rubySass('./src/sass/*.scss', {
        sourcemap: false,
        style: 'compressed',
    }).pipe(gulp.dest('./css/'));
});

//压缩js
gulp.task('minifyJs',function(){
	return gulp.src('./src/js/*.js').pipe(uglifyJs()).pipe(gulp.dest('./js/'));
});
//监听
gulp.task('default',['minifyJs','sass'], function(){
	//gulp.watch('./src/js/*.js',['minifyJs']);
	gulp.watch('./src/sass/*.scss',['sass']);
})
