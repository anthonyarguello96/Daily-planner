const gulp = require('gulp');
const {series} = require('gulp');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


function watch (){
  browserSync.init({
    server:'./dist'
  });
  gulp.watch('sass/**/*.scss', gulp.parallel(styles));
  gulp.watch('sass/**/*.scss').on('change', browserSync.reload);
  gulp.watch('index.html', gulp.parallel(copyHtml));
  gulp.watch('*.html').on('change', browserSync.reload);
}

function copyHtml(cb) {
  gulp.src('index.html')
      .pipe(gulp.dest('dist'));
  cb();
}


function styles(cb) {
  gulp.src('sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .on('error', sass.logError)
      .pipe(
          autoprefixer({
            browserlist: ['last 2 versions'],
          })
      )
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream());
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

exports.default = series(styles, copyHtml, scripts ,watch);
