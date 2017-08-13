// test jquery present:
// $(document).ready(function() {
  //  alert('jquery loaded');
// });

// Bundle the below up into a window.onload init function or something

// Drawing the Logo
// ------------------

function draw(pathSelector) {
  const path = document.querySelector(pathSelector);
  const pathLength = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = pathLength + ' ' + pathLength; 
  path.style.strokeDashoffset = pathLength;
  path.getBoundingClientRect();
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


