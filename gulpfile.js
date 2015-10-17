var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jeet = require('jeet');
var rupture = require('rupture');
var nib = require('nib');


gulp.task('stylus', function () {
  gulp.src('style/**/*.styl')
                       .pipe(stylus({
                       use:[jeet(),rupture(), nib()]
                       }))
                       .pipe(gulp.dest('css/'))
});

gulp.task('watch', function() {
  gulp.watch('stylus/**/*.styl', ['stylus']);
});

gulp.task('default', ['watch',]);


