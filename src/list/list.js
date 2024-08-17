import edit from './edit.js'
import editImg from 'assets/edit.png'
import deleteItem from './delete.js'
import deleteImg from 'assets/delete.png'
import supabase from '../supabase.js'

async function list () {
  const { data } = await supabase
    .from('users')
    .select('*')

  data.map(element => {
    document.querySelector('.content').innerHTML += `
      <div class='content__container'>
        <span class='content__list'>${element.name}</span>
        <figure class='content__figure'>
          <img src='${editImg}' class='content__buttonEdit'>
          <img src='${deleteImg}' class='content__buttonDelete'>
        </figure>
      </div>
    ` 
    edit(document.querySelectorAll('.content__buttonEdit'))
    deleteItem(document.querySelectorAll('.content__buttonDelete'))
  })
}

export default list 
