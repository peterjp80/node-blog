var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var fs = require('fs');
var tsconfigPath = "tsconfig.json";

gulp.task("sass", function() {
    gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("public/stylesheets"))
});

gulp.task("build", ["scripts"], function() {
    gulp.watch("sass/*.scss", ["sass"]);
})

gulp.task("scripts", function() {
    // compile TypeScript code
    if (fs.existsSync(tsconfigPath)) {
        gulp.src("scripts/**/*.ts")
            .pipe(ts(ts.createProject(tsconfigPath)))
            .pipe(gulp.dest("public/javascripts"))
    }    
})