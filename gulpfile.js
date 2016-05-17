var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('build:css', function() {
  gulp.src('assets/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/styles'));
});

gulp.task('minify:css', function() {
  gulp.src('assets/styles/style.css')
    .pipe(minify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('assets/styles'));
});

gulp.task('default', ['build:css', 'minify:css'])

gulp.task('watch', function() {
  gulp.watch('assets/styles/**/*.scss', ['default']);
})
