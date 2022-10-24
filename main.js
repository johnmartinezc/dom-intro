let child1 = document.querySelector('.child-1')
child1.innertext = "child 1"
child1.className = "child-2"

let child3 = document.querySelector('.child-3')
child3.style.border="3px solid blue"
child3.style.background = "orange"

let myImage = document.querySelector("img")
myImage.src = "https://www.infinityward.com/content/dam/atvi/infinityward/iw-touchui/news/feature/mw2-beta-hero.jpg"
myImage.style.height = '300px'
myImage.style.width = '300px'

let header = document.querySelector('h1')
header.innerHTML = "this is different text!"
header.style.backgroundColor = 'aqua'

let child4 = document.querySelector('#child-4')
child4.style.fontSize = "50px"
console.log('Hello world!')
console.log(child4.innerHTML)
console.log(child4)