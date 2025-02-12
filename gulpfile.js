const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');



function comprimeImagem(){
    return gulp.src('./source/imagens/*')
    .pipe(imagemin())
    .pipe (gulp.dest('./build/imagens'));
}

function comprimeJs(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

function compilarSass(){

    return gulp.src('./source/styles/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}



exports.default = function(){

    gulp.watch('./source/styles/*.scss',{ ignoreInitial : false}, gulp.series(compilarSass));
    gulp.watch('./source/scripts/*.js',{ ignoreInitial : false}, gulp.series(comprimeJs));
    gulp.watch('./source/imagens/*',{ ignoreInitial : false}, gulp.series(comprimeImagem));


}