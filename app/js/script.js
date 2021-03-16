const input = document.querySelector('#todo');
const label = document.querySelector('.label label');

if(!input.value) {
    input.addEventListener("focus",function(){
        label.classList.add('none');
    })
    
    input.addEventListener("blur",function(){
        label.classList.remove('none');
    })
}