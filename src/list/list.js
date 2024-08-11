import supabase from '../supabase.js'
import listing from '../components/listing.js'

const { data } = await supabase
  .from('users')
  .select('*')

let buttonEdit
let buttonDelete
const content = document.querySelector('.content')

data.map(element => {
  content.innerHTML += listing(element.name)
  buttonEdit = document.querySelectorAll('.content__buttonEdit')
  buttonDelete = document.querySelectorAll('.content__buttonDelete')
})

export { buttonEdit, buttonDelete }
