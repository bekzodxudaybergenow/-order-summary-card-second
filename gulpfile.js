const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')



const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css'
    }
}


function styles() {
    return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(rename({
        basename: 'main',
        suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest))
}


function watch() {
    gulp.watch(paths.styles.src, styles)
}

const build = gulp.series(styles, watch)


exports.styles = styles
exports.watch = watch
exports.build = build
exports.default = build