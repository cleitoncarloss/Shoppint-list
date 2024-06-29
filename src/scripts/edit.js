import supabase from './supabase.js'
import { buttonEdit } from './list.js'
import componentEdit from './componentEdit.js'

const content = document.querySelector('.content')
buttonEdit.forEach(button => {
  button.addEventListener('click', function() {
    const brother = button.parentElement
    const father = brother.parentElement
    let text = father.children[0]
    content.innerHTML += (componentEdit(text.textContent))

    document.querySelector('.edit__save').addEventListener('click', async () => {
      const input = document.querySelector('.edit__input')

      await supabase
        .from('users')
        .update({ name: input.value })
        .eq('id', '758858d7-16fc-4eb6-a550-19a851cc33aa')
        .select()
    })
  })
})
