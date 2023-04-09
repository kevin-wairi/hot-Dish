document.addEventListener('DOMContentLoaded',fetchCards)
let cardsDiv = document.getElementById('cardsdiv')
 let  url = 'http://localhost:3000/best-foods'


// // function to switch between products
// let orderList = document.querySelector('.orderlist')
// orderList.addEventListener('click',foodswitch)

    // if (e.target.id === 'icon1' || e.target.id === 'li1') {
 





// fetches  the best food object from JSON
function fetchCards(){
    return fetch(url)
    .then(resp=>resp.json())
    .then(data=>loadCards(data))
    .catch((error)=>console.log(error))
}

// loads all the favorite meals to the DOM
function loadCards(arr){
    for (const food of arr) {
    let card = document.createElement('div')
    card.classList.add('card')
    
    cardsDiv.appendChild(card)
            card.innerHTML = ` <img id='img' src='${food.img}' alt='${food.id}'>`+
                                `<div class="card_body" id="card_body">`+
                                ` <h4 class="card_name">${food.dsc}</h4>`+
                                `<p class="price">Price: ${food.price}</p>`+
                                `<p id='addP'><button id="btn">Add</button></p>`+
                            ` </div>`
                        }
 }

 const yourOder = document.querySelector('#yourOder')     
let btn = document.querySelector('#btn');
btn = document.addEventListener("click",addToCart)

//lists the order prices
let total = 0


    function addToCart(e){  
        if (e.target.id === 'btn') { 
        e.preventDefault(e)
        // console.log(e.target);
     const valPrice = e.target.parentNode.previousSibling.textContent;
     console.log(valPrice);
     const foodName = e.target.parentNode.previousSibling.previousSibling.textContent;
          
            let list = document.createElement('li')
            list.classList.add('yourOderList')
            yourOder.appendChild(list)
            // console.log(list);
            list.innerHTML =            
                             ` <h4 class="card_name">${foodName}</h4>`+
                            `<p id='price'>${valPrice}</p>`
           
                                  
         //appends your total bill to the DOM
    let yourTotal = document.getElementById('yourTotal')
    function totalCart(){
        let str = valPrice
        //converts the string price to Int
        let priceInt = parseInt(str.split(' ').pop())
        total +=priceInt
        yourTotal.innerHTML =   `Your Total is:${total}`
        console.log(total);
        
    }
    totalCart()
}else{
    console.log('Bonyeza kitufe kuagiza chakula :)');
}
    
        }
  
        
        
 
// const liked = Array.from(likers)
// liked.forEach(liker=>{})