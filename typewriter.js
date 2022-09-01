"use strict";
window.addEventListener("load", init);

let type2;
let type;
let i = 0;
let character;

function init() {
  type = document.querySelector("#typewriter").textContent;
  type2 = document.createElement("h1");
  type2.classList.add("typewritten");
  type2.textContent = "";
  document.querySelector("body").appendChild(type2);
  document.querySelector(".typewritten").textContent = ""; //hides the first h1
  if (type) {
    loop();
  } else {
    return;
  }

  //loop the function
  function loop() {
    let character = type[i];
    //print out the letter
    type2.innerHTML = type2.innerHTML + character;
    i++;
    if (i < type.length) {
      //set delay to the letter
      setTimeout(loop, 400);
    }
  }
}
