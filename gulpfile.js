const gulp = require('gulp');
const {series} = require('gulp');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');


function watch (){
  browserSync.init({
    server:'./'
  });
}


function styles(cb) {
  gulp.src('sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .on('error', sass.logError)
      // .pipe(
      //     autoprefixer({
      //       browserlist: ['last 2 versions'],
      //     })
      // )
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

exports.default = series(styles, scripts ,watch);
