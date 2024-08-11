function listing(item) {
  return `
    <div class='content__container'>
      <span class='content__list'>${item}</span>
      <figure class='content__figure'>
        <img src='../components/edit.png' class='content__buttonEdit'>
        <img src='../components/delete.png' class='content__buttonDelete'>
      </figure>
    </div>
  `
}

export default listing 
