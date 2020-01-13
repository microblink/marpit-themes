var gulp = require("gulp"),
    sass = require("gulp-sass");

var css = {
    input:  "./styles/source/*.scss",
    output: "./styles/output"
};

// CSS task
gulp.task("css", function() {
    return gulp.src(css.input)
            .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError)) // "expanded", "compressed"
            .pipe(gulp.dest(css.output));
});

// Watch
gulp.task("watch-css", function() {
    gulp.watch(css.input, ["css"]);
});