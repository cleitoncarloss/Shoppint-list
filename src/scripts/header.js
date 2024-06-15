class Header extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../css/header.css" />      

      <header class='header'>
        <div class='header__container'>
          <a href='../index.html'>
            <img class='header__logo' src='./images/logo.png' alt='imagem do logo' />
          </a>

          <nav class='header__navigation'>
            <a class='header__link' href="../index.html">home</a>
            <a class='header__link' href="../lista.html">ver lista</a>
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
    }

    this.shadowRoot.querySelector('.header__button').addEventListener('click', this.darkMode.bind(this))
  }

  darkMode() {
    this.shadowRoot.querySelector('.header__circle').classList.toggle('active')
    const body = document.querySelector('body')
    body.classList.toggle('dark')

    body.classList.contains('dark') ? localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme')
  }
}

customElements.define('c-header', Header)
