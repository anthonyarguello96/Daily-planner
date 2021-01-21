const gulp = require('gulp');
const {series} = require('gulp');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const cache = require('gulp-cache');

function watch() {
  browserSync.init({
    server: './dist',
  });
  gulp.watch('sass/**/*.scss', gulp.parallel(styles));
  gulp.watch('sass/**/*.scss').on('change', clearCache, browserSync.reload);
  gulp.watch('index.html', gulp.parallel(copyHtml));
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js', gulp.series(lint, scripts, clearCache));
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
  gulp.watch('img/**/*.jpg', gulp.series(copyImages));
  gulp.watch('img/**/*').on('change', browserSync.reload);
}


function copyHtml(cb) {
  gulp.src('index.html')
      .pipe(gulp.dest('dist'));
  cb();
}

function clearCache(done) {
  return cache.clearAll(done);
}


function copyImages() {
  return gulp.src('img/*')
      .pipe(imagemin({
        progressive: true,
        use: imageminPngquant,
      }))
      .pipe(gulp.dest('dist/img'));
}


function styles(cb) {
  return gulp.src('sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .on('error', sass.logError)
      .pipe(
          autoprefixer({
            browserlist: ['last 2 versions'],
          })
      )
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream());
  // cb();
}


function lint(cb) {
  gulp.src(['js/**/*.js'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  cb();
}

function scripts() {
  return gulp.src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(webpackStream(webpackConfig), webpack)
      // .pipe(babel())
      // IMPORTANT: Make sure the references tp js files point at all.js
      // .pipe(concat('all.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/js'));
}


exports.default = series(clearCache, styles, copyHtml, copyImages,
    lint, scripts, watch);
