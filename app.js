projects = [
 {
  title: 'Calculator',
  thumbnail: 'calculator.JPG',
  link: 'https://mohamedmahgoub04.github.io/calculator/'
 },
 {
  title: 'Rock, paper, scissors.',
  thumbnail: 'RPS.JPG',
  link: 'https://mohamedmahgoub04.github.io/rock-paper-scissors/'
 },
 {
  title: 'Etch-a-sketch',
  thumbnail: 'EAS.JPG',
  link: 'https://mohamedmahgoub04.github.io/etch-a-sketch/'
 },
 {
  title: 'Mailchimp clone',
  thumbnail: 'MC.JPG',
  link: 'https://mohamedmahgoub04.github.io/mailchimp-clone/'
 },
 {
  title: 'Library',
  thumbnail: 'lib.JPG',
  link: 'https://mohamedmahgoub04.github.io/library/'
 }
]

let i = 0
let text = 'Mohamed Mahgoub'
let speed = 175
function type(){
 if (i < text.length){
  document.querySelector('.sent').innerHTML += text.charAt(i)
  i++
  setTimeout(type, speed)
 }
 
}

function setTarget(){
 document.querySelectorAll('.social').forEach(x => {
  x.setAttribute('target', 'blank')
 })
}

function showProjects(){
 const tile = document.querySelector('.project-tile')
 for (project of projects){
  let span = document.createElement('span')
  
  let img = document.createElement('img')
  let a = document.createElement('a')
  let p = document.createElement('p')
  let b = document.createElement('span')
  let af = document.createElement('span')

  span.className = 'holder'
  a.setAttribute('href', project.link)
  a.setAttribute('target', 'blank')
  img.setAttribute('src', project.thumbnail)
  p.innerHTML = project.title
  // b.innerHTML = '<'
  // af.innerHTML = '/>'
  // b.className = 'dec'
  // af.className = 'dec'

  a.append(img)
  span.append(a)
  // span.append(b)
  span.append(p)
  // span.append(af)
  tile.append(span)

 }
}

document.addEventListener('DOMContentLoaded', () => {
 setTarget()
 type()
// document.querySelector('.cursor').style.display = 'none'
 document.querySelector('.project-tile').innerHTML = ''
 showProjects()

})