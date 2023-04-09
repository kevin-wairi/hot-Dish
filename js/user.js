document.addEventListener('DOMContentLoaded',()=>{})
let start = document.getElementById('starter')
let logIn = document.getElementById('divForm')
let logInForm = document.getElementById('logIn')
let btnSubmit = document.getElementById('btnSubmit')
let h4 = document.getElementById('h4')



// unhides the form DIV
start.addEventListener('click',()=>{logIn.style.visibility='visible';})

//the X that closes the form DIV
let close = document.getElementById('close')
close.addEventListener('click',()=>{ logIn.style.visibility='hidden';})

btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();

    let userName = document.getElementById('user').value
    let userLocation = document.getElementById('userlocation').value
    let userlog = document.getElementById('userlog')
    h4.innerHTML = `${userName}'s order`
                h4.style.fontWeight = "900";

   setTimeout(function() {alert(`Welcome ${userName}, Bon Appétit `);}, 100)

    logInForm.reset()
    logIn.style.visibility='hidden';
    let userlogname = document.createElement('h4')
    userlogname.style.padding='10px'
    userlog.replaceChildren(userlogname)
    userlogname.textContent = `${userName}`
})
// setTimeout(function() {
//     $('#mydiv').fadeOut('fast');
// }, 1000); //