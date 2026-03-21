let btn = document.querySelector('#btn')
let input_box = document.querySelector('#input-box')
let plus = document.querySelector('#plus')
let delete_icon = document.querySelector('#delete-icon')
let second_part = document.querySelector('.second-part')
let item=document.querySelectorAll('.item')
let total=document.querySelector('#total')



//This is for search
search()



plus.addEventListener('click', () => {

  let new_div = document.createElement('div')
  new_div.classList.add('item')
  let ans = document.createElement('span')
  ans.textContent = input_box.value
  let delete_btn = document.createElement('img')
  delete_btn.src ="./icons8-delete.svg" 

//This is for delete
  delete_btn.addEventListener('click', () => {
    new_div.remove()
    updateCount()
  })


// this is for edit
   ans.addEventListener('dblclick',()=>{
    let input=document.createElement('input')
    input.value=ans.textContent
    new_div.replaceChild(input,ans)
    input.addEventListener('keydown',(e)=>{
      if(e.key==='Enter'){
         ans.textContent = input.value
         new_div.replaceChild(ans,input)
      }
    })
  })

//This is for remove
  btn.addEventListener('click',()=>{
  new_div.remove()
})



//This is fro if already present or empty not added
let value=input_box.value.trim().toLowerCase()

if(value=='')return
let items=document.querySelectorAll('.item span')
let is_duplicate=false
items.forEach((itm)=>{
  if(itm.textContent.toLowerCase()===value){
    is_duplicate=true
  }
})
  if(is_duplicate){
    console.log("duplicate item")
    return
  }
 
    new_div.appendChild(ans)
  new_div.appendChild(delete_btn)

  second_part.appendChild(new_div)
input_box.value = '';
   updateCount()
})

function updateCount() {
    // Always get fresh list of items
    let items = document.querySelectorAll('.item')
    total.innerText = items.length
    console.log(items.length)
}


function search(){
  input_box.addEventListener('input', () => {
  let searchValue = input_box.value.toLowerCase()
  let items = document.querySelectorAll('.item')

  items.forEach((item) => {

    let span = item.querySelector('span')
    let input = item.querySelector('input')

    let text = ''

    if (span) {
      text = span.textContent.toLowerCase()
    } else if (input) {
      text = input.value.toLowerCase()
    }

    if (text.includes(searchValue)) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }

  })
})

}