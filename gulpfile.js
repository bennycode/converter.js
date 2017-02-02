const gulp = require('gulp');
const gulpEslint = require('gulp-eslint');
const gulpJasmine = require('gulp-jasmine');
const gulpUtil = require('gulp-util');
const runSequence = require('run-sequence');

const pattern = {
  source_code: 'src/js/**/*.js',
  test_code: 'test/js/**/*Spec.js'
};

gulp.task('lint', function(done) {
  runSequence('lint_js', done);
});

gulp.task('lint_js', function() {
  return gulp.src([
    pattern.source_code,
    pattern.test_code
  ])
    .pipe(gulpEslint())
    .pipe(gulpEslint.format())
    .pipe(gulpEslint.failAfterError());
});

gulp.task('test', function(done) {
  runSequence('test_node', done);
});

gulp.task('test_node', function() {
  gulpUtil.log(gulpUtil.colors.yellow('Running tests on Node.js:'));

  return gulp.src(pattern.test_code)
    .pipe(gulpJasmine({
      random: true,
      stopSpecOnExpectationFailure: true
    }));
});
