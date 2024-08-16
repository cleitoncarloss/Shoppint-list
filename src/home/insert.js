import supabase from '../supabase.js'

async function insert() {
  const valueList = document.querySelector('.content__value')
  await supabase
    .from('users')
    .insert({ name: valueList.value })

  valueList.value = ''
}

document.querySelector('.content__save').addEventListener('click', insert)
export default insert
