// Detects IE versions 9 and 10. Does not require external libraries such as jQuery.

/*
Detection can be changed by simply changing the "v == 9" or "v == 10" 
values to the respective version(s) of IE you wish to detect.

Note: classList is not supported in IE 8 or older.
*/

document.addEventListener("DOMContentLoaded", function(event) {
	var x = document.getElementsByTagName("html");
	var v = document.documentMode;
	v == 9 ? x[0].classList.add("ie9") : (v == 10 ? x[0].classList.add("ie10") : console.log("Not IE"));
});


//Greensock work

$( document ).ready(function() {
    
	// Rocket Animation
$(function() {
	var rocket = $('#overlay-launch'),
			rocketPlatform = $('#rocket_platform'),
			wheel = $('#rocket_leftWheel_left, #rocket_leftWheel_right, #rocket_rightWheel_left, #rocket_rightWheel_right'),
			rocketShip = $('#rocket_ship'),
			flames = $('#flames'),
			glass = $('#glass'),
			masterTimeline = new TimelineMax();


	var enterRocket = new TimelineMax();		
	enterRocket.set(rocket, {x: -1000, opacity: 0}).set(flames, {scale: 0.25, transformOrigin: '50% 0%', opacity: 0})

	enterRocket.to(rocket, 1, {opacity: 1, ease: Power4.easeIn})
	.to(rocket, 3.5, {x: 0, ease: Power4.easeOut}, '-=1')
	.fromTo(wheel, 3.5, {rotation:-360}, {rotation:0, ease: Power4.easeOut, transformOrigin: '50% 50%'}, '-=3.5')
	.fromTo(rocketPlatform, 0.75, {y: 0}, {y: -1, repeat: 3, ease: Power4.easeOut}, '-=3.5');

	// .to(glass, 5, {x: 0, ease: Power4.easeOut});

	$('.body').on('click', function(){
		var launchTime = new TimelineMax({delay: 0.12});
		launchTime.staggerFromTo(rocketShip, 0.12, {x:-1}, {x:1, repeat:4}, '-=0.6')
		.to(flames, 2, {opacity: 1, scale:1}, 3)
		.to(rocketShip, 10, {y: -1000, ease: Power4.easeIn}, '-=6.25')
	});
});



});