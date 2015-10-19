var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jeet = require('jeet');
var rupture = require('rupture');
var nib = require('nib');
var browserSync = require('browser-sync').create();

gulp.task('stylus', function () {
  gulp.src('./stylesheets/style.styl')
                       .pipe(stylus({
                       use:[jeet(),rupture(), nib()]
                       }))
                       .pipe(gulp.dest('./stylesheets/'))
                       .pipe(browserSync.reload({stream:  true}));

});

gulp.task('wsh', function(){

  browserSync.init({
      server: "."
  });
  gulp.watch('./**/*.styl', ['stylus']);
  gulp.watch('**/*.html').on('change', browserSync.reload);
});


gulp.task('default', ['wsh', 'connect',]);


