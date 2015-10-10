import gulp from 'gulp';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import jasmine from 'gulp-jasmine';
import browserSync from 'browser-sync';

const reload      = browserSync.reload;

const paths = {
    es5: 'js/src/*.js',
    js: 'js/src/main.js',
    test: 'js/test.js',
    dist: 'js/',
    html: './index.html'
};

gulp.task('es6', () => {
    gulp.src(paths.es5)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(paths.dist))
        .pipe(reload({stream: true}));

});

// gulp.task('test', () => {
//     gulp.src(paths.test)
//         .pipe(jasmine());
// });

gulp.task('server', () => {
    browserSync({
        server: "./",
        port: 8880

    });
    gulp.watch(paths.es5, ['es6']);
    // gulp.watch(paths.test, ['test']);
    gulp.watch(paths.html).on('change', reload);
});



gulp.task('default', ['es6', 'server']);