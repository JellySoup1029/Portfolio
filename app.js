projects = [
 {
  title: 'Calculator',
  thumbnail: 'calculator.JPG',
  link: 'https://mohamedmahgoub04.github.io/calculator/'
 },
 {
  title: 'Rock, paper, scissors.',
  thumbnail: 'RPS.jpg',
  link: 'https://mohamedmahgoub04.github.io/rock-paper-scissors/'
 },
 {
  title: 'Etch-a-sketch',
  thumbnail: 'EAS.jpg',
  link: 'https://mohamedmahgoub04.github.io/etch-a-sketch/'
 },
 {
  title: 'Mailchimp clone',
  thumbnail: 'MC.jpg',
  link: 'https://mohamedmahgoub04.github.io/mailchimp-clone/'
 },
 {
  title: 'Library',
  thumbnail: 'lib.jpg',
  link: 'https://mohamedmahgoub04.github.io/library/'
 }
]

function setTarget(){
 document.querySelectorAll('.social').forEach(x => {
  x.setAttribute('target', 'blank')
 })
}

function showProjects(){
 const tile = document.querySelector('#projects')
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
 // type()
// document.querySelector('.cursor').style.display = 'none'
 document.querySelector('#projects').innerHTML = ''
 showProjects()

})
