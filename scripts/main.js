const hamburgerButton = document.getElementsByClassName('hamburger_button')[0]
const navBar = document.getElementsByClassName('nav_links')[0]

hamburgerButton.addEventListener('click', () => {
  navBar.classList.toggle('t')
})