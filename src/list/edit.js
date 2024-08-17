import close from 'assets/close.png'
import supabase from '../supabase.js'

async function edit (buttonEdit) {
  const content = document.querySelector('.content')
  buttonEdit.forEach(button => {
    button.addEventListener('click', function() {
      const brother = button.parentElement
      const father = brother.parentElement
      let text = father.children[0]
      
      const section = document.createElement('section')
      const buttonClose = document.createElement('img')
      buttonClose.src = `${close}`
      buttonClose.classList.add('edit__buttonClose')
      
      section.innerHTML = `
        <input class='edit__input' type='text' value='${text.textContent}' /> 
        <button class='edit__save'>Salvar</button>
      ` 
      section.insertAdjacentElement('afterbegin', buttonClose)
      section.classList.add('edit')
      content.append(section)

      document.querySelector('.edit__buttonClose').addEventListener('click', () => section.remove())

      document.querySelector('.edit__save').addEventListener('click', async () => {
        const input = document.querySelector('.edit__input')
        
        await supabase
          .from('users')
          .update({ name: input.value })
          .eq('name', text.textContent)
          .select()
        
        text.textContent = input.value
        input.value = ''
      })
    })
  })
}

export default edit
