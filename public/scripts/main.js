var imageNo = 1;

setInterval(() => {
	$("#content .image-" + imageNo).removeClass("fadeIn");
	$("#content .image-" + imageNo).addClass("fadeOut");
	setTimeout(() => {
		$("#content .image-" + imageNo).removeClass("animated fadeOut");
		$("#content .image-" + imageNo).addClass("hidden");
		imageNo++;
		if(imageNo > 4){
			imageNo = 1;
		}
		$("#content .image-" + imageNo).removeClass("hidden");
		$("#content .image-" + imageNo).addClass("animated fadeIn");
	}, 1000);

}, 3 * 1000)