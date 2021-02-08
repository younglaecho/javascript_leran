const insert = document.querySelector('.insert');
const submit = document.querySelector('.submit');
const shopping_list = document.querySelector('.shopping_list');
const list = document.querySelector('.list');
let num = 0;

submit.addEventListener('click', () => {
    const content_box = document.createElement('div');
    if(!(insert.value) == false) {
        content_box.innerHTML = `<div class="content">${insert.value}</div>
        <div class="delete"></div>`
        content_box.setAttribute('class', 'content_box');
        list.appendChild(content_box);
        insert.value = ''
    }

})
    
list.addEventListener('click', event => {
    event = event || window.event;
    if (event.target.getAttribute('class')=='delete') {
        event.target.parentNode.remove();
    } 
})
insert.addEventListener('keypress', event => {
    console.log(event.key)
    if(event.key == 'Enter') {
        submit.click()
    }
})

