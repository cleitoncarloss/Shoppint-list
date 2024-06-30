import supabase from './supabase.js'
import { buttonDelete } from './list.js'

let text
buttonDelete.forEach(button => {
	button.addEventListener('click', async function() {
		const brother = button.parentElement
		const father = brother.parentElement
		text = father.children[0].textContent

		father.remove()

		await supabase
			.from('users')
			.delete()
			.eq('name', text)
	})
})
