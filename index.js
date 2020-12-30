let drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function() {
    // console.log(this.textContent);
    let keyPressed = this.textContent;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
  })
};

document.addEventListener('keydown', event => {
  // console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  let audio;
  switch (key) {
    case 'w':
      audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      console.log(this.textContent);
      break;
    }
  };

  function buttonAnimation(currentKey){
    let activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function() {
      activeButton.classList.remove('pressed');
    }, 100);
  };

// drumButtons.forEach((btn) => {
//   btn.addEventListener("click", handleClick => {
//     alert('I just got clicked!');
//   });
// });
