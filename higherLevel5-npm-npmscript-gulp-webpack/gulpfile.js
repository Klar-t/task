var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var imagemin=require('gulp-imagemin');
gulp.task('css', function() {
    return gulp.src('./src/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css/index.css'));
});

gulp.task('image', function  () {
	 return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'))
});