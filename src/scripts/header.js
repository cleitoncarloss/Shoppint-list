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
          <img class='header__logo' src='./images/logo.png' alt='imagem do logo' />

          <nav class='header__navigation'>
            <a class='header__link' href="../index.html">home</a>
            <a class='header__link' href="../lista.html">ver lista</a>
            <div class='header__button'>
              <div class='header__ball'></div>
            </div>
          </nav>
        </div>
      </header>
    `

    this.shadowRoot.querySelector('.header__button').addEventListener('click', this.darkMode.bind(this))
  }

  darkMode() {
    this.shadowRoot.querySelector('.header__ball').classList.toggle('active')
  }
}

customElements.define('c-header', Header)
