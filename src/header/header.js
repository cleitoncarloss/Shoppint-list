import logo from 'assets/logo.png'
import whiteLogo from 'assets/whiteLogo.png'

class Header extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href='./css/style.css' />      

      <header class='header'>
        <div class='header__container'>
          <a href='../home/index.html'>
            <img class='header__logo' src='${logo}' alt='Logo' />
          </a>

          <nav class='header__navigation'>
            <a class='header__link' href="index.html">home</a>
            <a class='header__link' href="./list.html">ver lista</a>
            <div class='header__button'>
              <div class='header__circle'></div>
            </div>
          </nav>
        </div>
      </header>
    `
    if (localStorage.getItem('theme')) {
      document.querySelector('body').setAttribute('class', 'dark')
      this.shadowRoot.querySelector('.header__circle').classList.add('active')
      this.shadowRoot.querySelector('.header__logo').src = `${whiteLogo}` 
    }

    this.shadowRoot.querySelector('.header__button').addEventListener('click', this.darkMode.bind(this))
  }

  darkMode() {
    this.shadowRoot.querySelector('.header__circle').classList.toggle('active')
    const body = document.querySelector('body')
    body.classList.toggle('dark')
    
    if(body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark')
      this.shadowRoot.querySelector('.header__logo').src = `${whiteLogo}` 
    } else {
      localStorage.removeItem('theme')
      this.shadowRoot.querySelector('.header__logo').src = `${logo}` 
    }
  }
}

export default Header
