'use strict'

// var i = 0;

const intro = "Hello, I am Oluwafisayo Takuro. I am a frontend developer.";
console.log(intro)
const speed = 90;

let i = 0;
const typeWriter = () => {
  if (i < intro.length) {
    document.querySelector('.introduction').innerHTML += intro.charAt(i);
    i++;
    setTimeout(typeWriter, speed)
  }
}
typeWriter()




