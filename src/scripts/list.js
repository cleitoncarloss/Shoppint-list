import supabase from './supabase.js'
import listing from './listing.js'

const { data } = await supabase.from('users').select('*')
const content = document.querySelector('.content')
let buttonDelete

data.map(element => {
  content.innerHTML += listing(element.name)
  buttonDelete = document.querySelectorAll('.content__buttonDelete')
})

export default buttonDelete