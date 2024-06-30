import supabase from './supabase.js'
import { buttonEdit } from './list.js'
import componentEdit from './componentEdit.js'

const content = document.querySelector('.content')
buttonEdit.forEach(button => {
  button.addEventListener('click', function() {
    const brother = button.parentElement
    const father = brother.parentElement
    let text = father.children[0]
    
    const section = document.createElement('section')
    section.innerHTML = componentEdit(text.textContent)
    content.append(section)

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