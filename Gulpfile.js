var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

// Change default task to use compress_images task
gulp.task('default', ['compress_images']);

// Compress png images from images/ folder
gulp.task('compress_images', function () {
    return gulp.src('assets/**/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('_site/assets'));
});
