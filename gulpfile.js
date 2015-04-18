var gulp = require('gulp');
var browserify = require('gulp-browserify');
var shell = require('gulp-shell');

gulp.task('browserify', function () {
  // Compile source with browserify, as this will let dependencies run in SceneVr's sandbox
  gulp.src('src/*.js', { read: false })
    .pipe(browserify({
    }))
    .pipe(gulp.dest('./dist'))

    // Touch the XML file in the root of the same name, to trigger SceneVr's reload
    .pipe(shell([
      'if [ -f <%= xml(file.path) %> ]; then touch <%= xml(file.path) %>; fi'
    ], {
      templateData: {
        xml: function (s) {
          return s.replace(/dist\/(.*).js/, '$1.xml');
        }
      }
    }));
});

gulp.task('watch', function () {
  gulp.watch('src/*.js', ['browserify']);
});

gulp.task('default', ['watch']);
