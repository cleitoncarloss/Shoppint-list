function componentEdit(value) {
  return `
    <section class='edit'>
      <input class='edit__input' type='text' value='${value}' /> 
      <button class='edit__save'>Salvar</button>
    </section>
  `
}

export default componentEdit
