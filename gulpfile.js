const gulp = require('gulp');
const {series} = require('gulp');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const sourcemaps = require('gulp-sourcemaps');

function watch (){
  browserSync.init({
    server:'./'
  });
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

exports.default = series(scripts ,watch);
