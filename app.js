const colors = [
  "red",
  "green",
  "yellow",
  "rgba(133,122,200)",
  "pink",
  "purple",
];

 


let Click = document.querySelector(".click");

Click.addEventListener("click", backColorChange);

 

function backColorChange() {
  
  document.body.style.backgroundColor = colors[ArraySayiDegistir()];
  document.querySelector(".color").textContent = colors[ArraySayiDegistir()];
  //baslangic ayari

}



function ArraySayiDegistir() {
  return Math.floor(Math.random() * colors.length);
}

