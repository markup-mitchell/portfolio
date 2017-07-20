// let landSect = document.querySelector('.landingSection');
// landSect.style.backgroundImage = 'url("assets/moss_and_lichen.jpg")';
// landSect.style.backgroundSize = 'cover';

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

// function pulse(){
//   let buttonList = document.querySelectorAll('.button');
//   buttonList.forEach(function(button) {
//     button.classList.add('pulse');
//     console.log(button);
//   });
// }

const BUTTONS = document.querySelectorAll('.button');

// This isn't cool. couldn't get transitionend eventlisteners working :(

function addPulse(identifier, delay) {// add 'pulse once after x time' prop to a specified element
  let element = document.querySelector(identifier);
  element.style.animation = `pulse .5s 1 ${delay}s`;
}

function removePulse(identifier) { // removes animation instructions specified element
  let element = document.querySelector(identifier);
  element.style.removeProperty('animation');
    console.log(element);
}

function pulseButtons(){ // calls addPulse on all the buttons 
  for (i=0;i<BUTTONS.length;i++){
    let identifier = BUTTONS[i].classList[1];
    addPulse(`.${identifier}`, i/8); // i/8 is an arbitrary incremental fraction 
  }
}

function unpulseButtons(){ // calls removePulse on all the buttons
  BUTTONS.forEach(function(button) {
    button.style.removeProperty('animation');
  });
}

setInterval(pulseButtons, 5000);
setInterval(unpulseButtons, 5500);


