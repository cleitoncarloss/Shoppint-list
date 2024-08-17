import supabase from '../supabase.js'

function insert() {
  document.querySelector('.content__save').addEventListener('click', async () => {
    const valueList = document.querySelector('.content__value')
    await supabase
      .from('users')
      .insert({ name: valueList.value })

    valueList.value = ''
  })
}

export default insert
