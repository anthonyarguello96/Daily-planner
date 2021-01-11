const gulp = require('gulp');
const {series} = require('gulp');
const browserSync = require('browser-sync').create();

function watch (){
  browserSync.init({
    server:'./'
  });
}

exports.default = series(watch);
