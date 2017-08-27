var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var imagemin=require('gulp-imagemin');
var cssconcat = require('gulp-concat');

gulp.task('css', function() {
    return gulp.src(['./src/css/font_5mgv8lh2v8daq0k9/iconfont.css','./src/css/index.css'])
        .pipe(cssnano())
        .pipe(cssconcat('all.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('image', function  () {
	 return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'))
});
