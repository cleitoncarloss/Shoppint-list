import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://gyezcramcvtfpcwcwbzt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5ZXpjcmFtY3Z0ZnBjd2N3Ynp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2NDY5MzUsImV4cCI6MjAyNDIyMjkzNX0.789_Mu3PGfJ5kIXl2x_1Bp76M6Cs54mmch-n1FQZrFw'
)

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
