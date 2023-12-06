let buttonMenu = document.querySelector('.header__buttonMenu')
let links = document.querySelector('.header__links')

let isOpenMenu = false

function toggleMenu() {
  isOpenMenu = !isOpenMenu

  isOpenMenu ? links.classList.add('--show') : links.classList.remove('--show')
}

buttonMenu.addEventListener('click', toggleMenu)

document.getElementById('year').innerText = new Date().getFullYear()
