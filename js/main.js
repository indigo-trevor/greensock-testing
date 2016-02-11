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
    
	var iLetter1 = $('#I__letter--1'),
		iLetter2 = $('#I__letter--2'),
		iLetter3 = $('#I__letter--3'),
		oLetter1 = $('#o__letter--1'),
		oLetter2 = $('#o__letter--2'),
		oLetter3 = $('#o__letter--3'),
		slLetter1 = $('#Sl__letter--1'),
		slLetter2 = $('#Sl__letter--2'),
		slLetter3 = $('#Sl__letter--3'),
		ndigLetter1 = $('#ndig__letter--1'),
		ndigLetter2 = $('#ndig__letter--2'),
		ndigLetter3 = $('#ndig__letter--3');
		dotLetter1 = $('#dot__letter--1'),
		dotLetter2 = $('#dot__letter--2'),
		dotLetter3 = $('#dot__letter--3');
		ateLetter1 = $('#ate__letter--1'),
		ateLetter2 = $('#ate__letter--2'),
		ateLetter3 = $('#ate__letter--3');

	var tl1 = new TimelineMax();

	tl1.set([iLetter1, iLetter2, iLetter3, ndigLetter1, ndigLetter2, ndigLetter3, oLetter1, oLetter2, oLetter3, slLetter1, slLetter2, slLetter3, ateLetter1, ateLetter2, ateLetter3, dotLetter1, dotLetter2, dotLetter3], {
		drawSVG: '0% 0%', alpha: 0
	})

	// I 
	.to(iLetter3, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')
	.to(iLetter2, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')
	.to(iLetter1, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')

	// ndig 
	.to(ndigLetter3, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')
	.to(ndigLetter2, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')
	.to(ndigLetter1, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')

	// o 
	.to(oLetter3, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')
	.to(oLetter2, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')
	.to(oLetter1, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')

	// sl
	.to(slLetter3, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')
	.to(slLetter2, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')
	.to(slLetter1, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')

	// ate
	.to(ateLetter3, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')
	.to(ateLetter2, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')
	.to(ateLetter1, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')

	// dot
	.to(dotLetter3, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')
	.to(dotLetter2, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')
	.to(dotLetter1, 0.3, { drawSVG: '0% 100%', ease: Power1.easeInOut, alpha:1},'-=0.2')

});