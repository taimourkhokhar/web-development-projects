let btn = document.querySelector('#btn')
let input_box = document.querySelector('#input-box')
let plus = document.querySelector('#plus')
let delete_icon = document.querySelector('#delete-icon')
let second_part = document.querySelector('.second-part')
let item=document.querySelector('.item')


plus.addEventListener('click', () => {

  let new_div = document.createElement('div')
  new_div.classList.add('item')

  let ans = document.createElement('span')
  ans.textContent = input_box.value

  let delete_btn = document.createElement('img')
  delete_btn.src ="./icons8-delete.svg" 

  delete_btn.addEventListener('click', () => {
    new_div.remove()
  })

  ans.addEventListener('dblclick',()=>{
    let input=document.createElement('input')
    input.value=ans.textContent
    new_div.replaceChild(input,ans)
    input.addEventListener('keydown',(e)=>{
      if(e.key==='Enter'){
         let ans = document.createElement('span')
         ans.textContent = input.value
         new_div.replaceChild(ans,input)
      }
    })
  })


  btn.addEventListener('click',()=>{
  new_div.remove()
})


  new_div.appendChild(ans)
  new_div.appendChild(delete_btn)

  second_part.appendChild(new_div)
  input_box.value = ''
})

