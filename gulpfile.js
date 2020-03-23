const gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean-css');

const mainSassFile = './assets/css/sources/main.scss';
const cssDir = './assets/css/';
const watchDir = './assets/css/sources/';

gulp.task('compile-css', function () {
    return gulp.src(mainSassFile)
        .pipe(sass())
        .pipe(prefixer({
            overrideBrowserslist: ['last 7 versions']
        }))
        .pipe(clean())
        .pipe(gulp.dest(cssDir));
});

gulp.task('watch', function () {
    gulp.watch(watchDir + '**/*.scss', gulp.series('compile-css'));
});

gulp.task('default', gulp.series('compile-css', 'watch'));