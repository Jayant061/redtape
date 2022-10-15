let menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";
function menutoggle(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "200px";
    }else{
        menuItems.style.maxHeight = "0px";
    }
}
let countEl = document.getElementById('count');
countEl.style.marginTop = "80px";
let popupEl = document.getElementById("popup");

let el = document.getElementById("popupel")

let costEl = document.getElementById("cost")

let productCount = 0;

function addToCart(idString){
    let text = document.getElementById(idString);
    popupEl.classList.add("open-popup")
    productCount++;
    let element ="";
     countEl.innerHTML = (`
        <h3>Total Items:${productCount}</h3><br>
    `);
    let cost = productCount*50;
    element+=(`<h4>${text.textContent}: $ 50.00</h4>`)
    el.innerHTML += element;
    costEl.innerHTML = (`<h2> Total Cost: $ ${cost}</h2>`);
    costEl.style.color = "white";
    el.style.marginTop = "20px";

}
function closePopup(){
    popupEl.classList.remove("open-popup");
}
function clearCart(){
    countEl.innerHTML = (`
    <h3>Added items will appear here</h3><br>
    `);
    el.innerHTML = "";
    costEl.innerHTML = (`<h2> Total Cost: $ 0.</h2>`);
    cost = 0;
    productCount = 0;
    costEl.style.color = "white";
    costEl.style.marginTop = "20px";
    el.style.marginTop = "40px";
}
function openCart(){

    popupEl.classList.add("open-popup");
    let cost = productCount*50;
    if(productCount === 0){
        countEl.innerHTML = (`
        <h3>Added items will appear here</h3><br>
        `);
        costEl.innerHTML = (`<h2> Total Cost:$ 0.00</h2>`);
        costEl.style.color = "white";
        costEl.style.marginTop = "20px";
        el.style.marginTop = "40px";

    }
    else{
        countEl.innerHTML = (`
        <h3>Total Items: ${productCount}</h3><br>`);
        costEl.innerHTML = (`<h2> Total Cost: ${cost}</h2>`);
    }
}
