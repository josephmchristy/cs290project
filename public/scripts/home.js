var imageNo = 1;

setInterval(() => {
	$("#images .image-" + imageNo).removeClass("fadeIn");
	$("#images .image-" + imageNo).addClass("fadeOut");
	setTimeout(() => {
		$("#images .image-" + imageNo).removeClass("animated fadeOut");
		$("#images .image-" + imageNo).addClass("hidden");
		imageNo++;
		if(imageNo > 4){
			imageNo = 1;
		}
		$("#images .image-" + imageNo).removeClass("hidden");
		$("#images .image-" + imageNo).addClass("animated fadeIn");
	}, 1000);

}, 6 * 1000)