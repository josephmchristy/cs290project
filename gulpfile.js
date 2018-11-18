var gulp = require("gulp"),
	watch = require("gulp-watch");

gulp.task("default", function(){
	console.log("gulp task created!");
});

gulp.task("html", function(){
	console.log("html changed");
});

gulp.task("css", function(){
	console.log("css changed");
});

gulp.task("watch", function(){
	watch("./views/*.handlebars", function(){
		gulp.start("html");
	});

	watch("./public/css/*.css", function(){
		gulp.start("css");
	});
});