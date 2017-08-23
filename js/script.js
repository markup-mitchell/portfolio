// Bundle the below up into a window.onload init function or something

// Drawing the Logo
// ------------------

// this function can be called on any svg path nodelist to apply the effect to arbitrary inline SVGs:

function draw(pathSelector) { // arg is name of any single SVG path
  const path = document.querySelector(pathSelector); // shorten!
  const pathLength = path.getTotalLength(); // get length
  path.style.transition = path.style.WebkitTransition = 'none'; // clear as precaution
  path.style.strokeDasharray = pathLength + ' ' + pathLength; // dash is full length space
  path.style.strokeDashoffset = pathLength; // offset so only ' ' is visible
  path.getBoundingClientRect(); // 'trigger a layout' ??? https://jakearchibald.com/2013/animated-line-drawing-svg/
  // apply the appropriate transition and make the change to initiate it: 
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-out';
  path.style.strokeDashoffset = '0';
}

let paths = document.querySelectorAll('#face path'); // limit nodelist to face svg paths

setTimeout(function(){
  paths.forEach(function(path) {
    let pathSelector = `#${path.id}`;
    draw(pathSelector);
  }, 10000); //timeout doesn't work
});

// Pulsing the buttons
// --------------------------
const BUTTONS = document.querySelectorAll('.button');

// This isn't cool. couldn't get transitionend eventlisteners working :(

function addPulse(identifier, delay) {// add 'pulse once after x time' prop to a specified element
  let element = document.querySelector(identifier);
  element.style.animation = `pulse .5s 1 ${delay}s`;
}

function pulseButtons(){ // calls addPulse on all the buttons 
  for (i=0;i<BUTTONS.length;i++){
    let identifier = BUTTONS[i].classList[1];
    addPulse(`.${identifier}`, i/8); // i/8 is an arbitrary incremental fraction 
  }
}

function unpulseButtons(){ 
  BUTTONS.forEach(function(button) {
    button.style.removeProperty('animation');
  });
}

setInterval(pulseButtons, 5000);
setInterval(unpulseButtons, 5600); // these might eventually de-sync?

// STICKY MENU - lifted from https://codepen.io/senff/pen/ayGvD?editors=0110
// todo - replace with native JS

// Create a clone of the menu, right next to original.
$('.buttonBox').addClass('original').clone().insertAfter('.buttonBox').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}
