const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function(){
    const inputValue = input.value;
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    list.appendChild(listItem);
    input.value = '';
    listItem.addEventListener('click', function(){
        listItem.remove();
    });
});




