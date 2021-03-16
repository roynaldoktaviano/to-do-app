const body = document.querySelector('body');
const input = document.querySelector('#todo');
const label = document.querySelector('.label label');
const icon = document.querySelector('.icon-img');

// Input Text
if(!input.value) {
    input.addEventListener("focus",function(){
        label.classList.add('none');
    })
    
    input.addEventListener("blur",function(){
        label.classList.remove('none');
    })
}

// Dark Mode
icon.addEventListener('click',function(){
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        icon.src = "/images/icon-sun.svg"
    } else {
        icon.src = "/images/icon-moon.svg"
    }
})
