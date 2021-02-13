const insert = document.querySelector('.insert');
const submit = document.querySelector('.submit');
const shopping_list = document.querySelector('.shopping_list');
const list = document.querySelector('.list');

let num = 0;

function onAdd() {
    if(insert.value) {
        content_box = createItem(insert.value);
        list.appendChild(content_box);
        insert.value = ''
        insert.focus();
    }
}

let id = 0;
function createItem(text) {
    const content_box = document.createElement('div');
    content_box.setAttribute('class', 'content_box');
    content_box.setAttribute('data-id', id)

    content_box.innerHTML = `
        <div class="content" >${text}</div>
        <div class="delete" data-id="${id}"></div>
        `
    id++
    // const content = document.createElement('div');
    // content.setAttribute('class', 'content');
    // content.innerText = text;
    // content_box.appendChild(content)

    // const delete_btn = document.createElement('div');
    // delete_btn.setAttribute('class', 'delete')
    // content_box.appendChild(delete_btn) 
    // delete_btn.addEventListener('click', () => {
    //     content_box.remove();
    // })
    return content_box;
}

// shopping_list.addEventListener('click', event =>{
//     if(event.target.classList.contains('delete')) {
//         event.target.parentNode.remove()
//     }
//     if(event.target.classList.contains('submit')) {
//         onAdd()
//     }
// })


submit.addEventListener('click', () => {
    onAdd()
})
insert.addEventListener('keypress', event => {
    if(event.key == 'Enter') {
        submit.click()
    }
})

list.addEventListener('click', event => {
    const data_id = event.target.dataset.id;
    if (data_id) {
        const tobedeleted = document.querySelector(`.content_box[data-id="${data_id}"]`)
        tobedeleted.remove()
    }
})

