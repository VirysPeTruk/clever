var btnOne         = document.getElementById('aicon_btOne');
var btnTwo         = document.getElementById('aicon_btTwo');
var btnTheree      = document.getElementById('aicon_btThere');
var hamburger      = document.getElementById('hamburger');
var pOne           = document.getElementById('pOne');
var mapAcardionOne = document.getElementById('map-acardionOne');
var mapAcardionTwo = document.getElementById('map-acardionTwo');
var nav            = document.getElementById('nav');
var mapEarch       = document.getElementById('map-earch');
var mapScreen      = document.getElementById('map-screen');
var reset          = document.getElementById('reset');
var cleverMapMenu  = document.getElementById('clever-map-menu');
var spanHide       = document.getElementById('spanHide');



function showByrgerMenu(){
    btnOne.classList.add('activeOne');
    btnTwo.classList.add('activeTwo');
    btnTheree.classList.add('activeTheree');
    pOne.classList.add('activeOneP');
    nav.classList.add('activeNav');
    this.onclick = hideByrgerMenu;	
}

function hideByrgerMenu(){
    btnOne.classList.remove('activeOne');
    btnTwo.classList.remove('activeTwo');
    btnTheree.classList.remove('activeTheree');
    pOne.classList.remove('activeOneP');
    nav.classList.remove('activeNav');
    reset.classList.remove('resetClick');
    this.onclick = showByrgerMenu;
}

hamburger.onclick = showByrgerMenu;

function showAcardionOne() {
	  mapAcardionOne.classList.add('activeAcardionOne');
	  mapAcardionOne.classList.remove('map-acardion');
	  reset.classList.add('resetClick');
	  this.onclick = hideAcardionOne;
}

function hideAcardionOne() {
	  mapAcardionOne.classList.remove('activeAcardionOne');
	  mapAcardionOne.classList.add('map-acardion');
	  reset.classList.remove('resetClick');
	  this.onclick = showAcardionOne;
}

clickOne.onclick = showAcardionOne;


function showAcardionTwo() {
	  mapAcardionTwo.classList.add('activeAcardionOne');
	  mapAcardionTwo.classList.remove('map-acardion');
	  reset.classList.add('resetClick');
	  this.onclick = hideAcardionTwo;
}

function hideAcardionTwo() {
	  mapAcardionTwo.classList.remove('activeAcardionOne');
	  mapAcardionTwo.classList.add('map-acardion');
	  reset.classList.remove('resetClick');
	  this.onclick = showAcardionTwo;
}

clickTwo.onclick = showAcardionTwo;

function showScrine(){
	mapEarch.classList.add('activeEarch');
	  mapEarch.classList.remove('clever-map-earch');
	  this.onclick = hideScrine;
}

mapScreen.onclick = showScrine;

function hideScrine(){
	mapEarch.classList.remove('activeEarch');
	  mapEarch.classList.add('clever-map-earch');
	  this.onclick = showScrine;
}

mapScreen.onclick = hideScrine;

function showCleverMapMenu(){
	cleverMapMenu.classList.add('activeMapMenu');
	  this.onclick = hideCleverMapMenu;
}

spanHide.onclick = showCleverMapMenu;

function hideCleverMapMenu(){
	cleverMapMenu.classList.remove('activeMapMenu');
	  reset.classList.remove('resetClick');
	  this.onclick = showCleverMapMenu;
}

spanHide.onclick = showCleverMapMenu;