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

function addPulse(identifier, delay) {
  let element = document.querySelector(identifier);
  element.style.animation = `pulse .5s 1 ${delay}s`;
  console.log(element);
}

