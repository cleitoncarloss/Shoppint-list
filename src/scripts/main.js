import supabase from "./supabase.js"

const valueList = document.querySelector('.content__value')
async function insert() {
  await supabase
    .from('users')
    .insert({ name: valueList.value })

  valueList.value = ''
}

document.querySelector('.content__save').addEventListener('click', insert)
