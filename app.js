

projects = [
 {
  title: 'Calculator',
  thumbnail: 'calc.png',
  link: 'https://mohamedmahgoub04.github.io/calculator/'
 },
 {
  title: 'Rock, paper, scissors.',
  thumbnail: 'rps.png',
  link: 'https://mohamedmahgoub04.github.io/rock-paper-scissors/'
 },
 {
  title: 'Etch-a-sketch',
  thumbnail: 'etch.png',
  link: 'https://mohamedmahgoub04.github.io/etch-a-sketch/'
 },
 // {
 //  title: 'Mailchimp clone',
 //  thumbnail: 'MC.jpg',
 //  link: 'https://mohamedmahgoub04.github.io/mailchimp-clone/'
 // },
 {
  title: 'Library',
  thumbnail: 'library.png',
  link: 'https://mohamedmahgoub04.github.io/library/'
 },
 {
  title: 'Tic-Tac-Toe',
  thumbnail: 'ttt.png',
  link: 'https://mohamedmahgoub04.github.io/Tic-Tac-Toe/'
 },
 {
  title: 'Admin Dashboard',
  thumbnail: 'admin.png',
  link: 'https://mohamedmahgoub04.github.io/admin-dashboard/'
 },
 {
  title: 'Sign-up form',
  thumbnail: 'form.png',
  link: 'https://mohamedmahgoub04.github.io/sign-up-form/'
 },
 {
  title: 'Restaurant page',
  thumbnail: 'restaurant.png',
  link: 'https://mohamedmahgoub04.github.io/restaurant-page/'
 },
 {
  title: 'To-do list',
  thumbnail: 'todo.png',
  link: 'https://mohamedmahgoub04.github.io/todo-list/'
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
 const burger = document.querySelector('.burger')
 const navbar = document.querySelector('.navbar')
 const item = document.querySelectorAll('.nav-item')

 burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  navbar.classList.toggle('active')
 })
 item.forEach(x => {
  x.onclick = () => {
   burger.classList.toggle('active')
   navbar.classList.toggle('active')
  }
 })

 var typed = new Typed(".typing", {
  strings: ['Mohamed Mahgoub'],
  typeSpeed: 110,
  backSpeed: 60,
  showCursor: false,
  // cursorChar: '+'
  // loop: true
 })
 
 setTarget()
 // type()
// document.querySelector('.cursor').style.display = 'none'
 document.querySelector('#projects').innerHTML = ''
 showProjects()

 document.querySelectorAll('#skills').onclick = () => {
  window.scrollBy(0, window.innerHeight / 10)
 }

 
})