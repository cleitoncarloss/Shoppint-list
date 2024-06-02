import supabase from './supabase.js'

const { data } = await supabase.from('users').select('*')
const content = document.querySelector('.content')

let imgEdit
let imgDelete
let elementHtml
let div
let figure

data.map(element => {
  div = document.createElement('div')
  div.classList.add('content__container')
  figure = document.createElement('figure')
  figure.classList.add('content__figure')

  imgEdit = document.createElement('img')
  imgEdit.src = '../images/edit.png'
  imgEdit.classList.add('content__buttonEdit')

  imgDelete = document.createElement('img')
  imgDelete.src = '../images/delete.png'
  imgDelete.classList.add('content__buttonDelete')
  elementHtml = document.createElement('span')

  elementHtml.textContent = element.name
  elementHtml.classList.add('content__list')

  div.append(elementHtml)
  div.append(figure)
  figure.append(imgEdit, imgDelete)

  content.append(div)
})
