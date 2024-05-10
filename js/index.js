$(document).ready(function() {
	// Set background image array
    var images = [
        'url(images/HomePageBackGround.jpg)',
        'url(images/HomePageBackGround_1.jpg)',
		'url(images/HomePageBackGround_2.jpg)'
    ];
    var currentImageIndex = 0;
	// Switch background image
    function changeBackground() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        $('body').css('background-image', images[currentImageIndex]);
    }
	// Automatic switching achieved through a timer
    setInterval(changeBackground, 3000); 
});