document.addEventListener('DOMContentLoaded',()=>{})
let start = document.getElementById('starter')
let logIn = document.getElementById('divForm')
let logInForm = document.getElementById('logIn')
let btnSubmit = document.getElementById('btnSubmit')



// unhides the form DIV
start.addEventListener('click',()=>{logIn.style.visibility='visible';})

//the X that closes the form DIV
let close = document.getElementById('close')
close.addEventListener('click',()=>{ logIn.style.visibility='hidden';})

btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();

    let userName = document.getElementById('user').value
    let userLocation = document.getElementById('userlocation').value

})