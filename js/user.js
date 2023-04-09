document.addEventListener('DOMContentLoaded',()=>{})
let start = document.getElementById('starter')
start.addEventListener('click',loadFordInput)
let logIn = document.getElementById('divForm')



function loadFordInput(){
    logIn.style.visibility='visible';

}



let close = document.getElementById('close')
close.addEventListener('click',()=>{ logIn.style.visibility='hidden';})