var fileinclude = require('gulp-file-include');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var sprite = require('css-sprite').stream;
var gulpif = require('gulp-if');
 
gulp.task('fileinclude', function() {
  gulp.src(['src/views/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('src/dist/'));
});

gulp.task('sprites', function () {
  return gulp.src('src/images/*.*')
    .pipe(sprite({
      name: 'sprite',
      style: 'sprite.scss',
      cssPath: 'src/styles/modules/',
      processor: 'scss'
    }))
    .pipe(gulpif('*.png', gulp.dest('src/dist/images/'), gulp.dest('src/styles/modules/')))
});

gulp.task('scripts', function() {
  gulp.src('src/scripts/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/dist/scripts/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('src/dist/scripts/'))
});

gulp.task('vendorScripts', function() {
  gulp.src([
      'src/scripts/vendor/jquery.min.js',
      'src/scripts/vendor/slick.min.js',
    ])
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/dist/scripts/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('src/dist/scripts/'))
});

gulp.task('vendorStyles', function() {
  gulp.src('src/styles/vendor/*.css')
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('src/dist/styles/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('src/dist/styles/'))
});

gulp.task('styles', function () {
  return gulp.src('src/styles/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(rename('style.css'))
  .pipe(gulp.dest('src/dist/styles'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('src/dist/styles'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      port: 3000,
      baseDir: 'src/dist',
      cors: true
    }
  })
})

gulp.task('watch', function() {
    gulp.watch('src/styles/**/*.scss', ['styles'])
    gulp.watch('src/scripts/*.*', ['scripts'])
});

gulp.task('default', function () {
    runSequence('fileinclude', 'sprites', 'scripts', 'styles', 'vendorScripts', 'vendorStyles', 'serve', 'watch');
});