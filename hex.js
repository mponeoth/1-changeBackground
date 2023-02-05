const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

// #F10520

const btn = document.querySelector('.click')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    console.log('calisti')
   let hexColor = '#'
    for(let i=0; i<6; i++) {
        hexColor += hex[randomNumber()]
      
}
        color.textContent = hexColor 
        document.body.style.backgroundColor = hexColor 
 })

    function randomNumber(){
        return Math.floor(Math.random() * hex.length);
    }
