const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const base64 = require('gulp-base64');
const rename = require('gulp-rename');

gulp.task('compile-css', () => {
    return gulp.src(['../src/**/*.less', '!../src/**/_*.less'])
        .pipe(less())
        .pipe(base64({
            extensions: ['svg', 'png', /\.jpg#datauri$/i],
        }))
        .pipe(cssmin())
        .pipe(rename((path) => {
            path.extname = '.wxss';
        }))
        .pipe(gulp.dest('../dist/'));
});

gulp.task('compile-js', () => {
    return gulp.src(['../src/**/*.js','../src/**/*.wxs'])
        .pipe(gulp.dest('../dist/'));
});

gulp.task('compile-json', () => {
    return gulp.src(['../src/**/*.json'])
        .pipe(gulp.dest('../dist/'));
});

gulp.task('compile-wxml', () => {
    return gulp.src(['../src/**/*.wxml'])
        .pipe(gulp.dest('../dist/'));
});

gulp.task('default', ['compile-css', 'compile-js', 'compile-json', 'compile-wxml']);