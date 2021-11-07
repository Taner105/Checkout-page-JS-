const taxRate = 0.18;
const shippingPrice = 15.0;
//Sayfa yüklendiğinde bu değişkenleri local storage at.

window.onload = () => {
    window.localStorage.setItem("taxRate", taxRate);  //localstorage verileri browser kapandığında kalır
    window.localStorage.setItem("shippingPrice", shippingPrice);

    window.sessionStorage.setItem("taxRate", taxRate);    //Browser kapandığında sessionın içerisi boşalır
    window.sessionStorage.setItem("shippingPrice", shippingPrice);

    calculateCartTotal(); //sayfa yüklendiği zaman adet bazında totali göster.

}

let quantityControllerDivs = document.getElementsByClassName("quantity-controller");
console.log(quantityControllerDivs);

[...quantityControllerDivs].forEach((quantityControllerDiv)=>{
    //minus butonuna ulaştım.
    let quantityP = quantityControllerDiv.querySelector("#product-quantity")
    quantityControllerDiv.firstElementChild.addEventListener("click", ()=>{
        quantityP.innerText = parseInt(quantityP.innerText) - 1

        if(quantityP.innerText == "0"){
            alert("product will be removed!")
            quantityControllerDiv.parentElement.parentElement.remove();
        }
        calculateProductTotal(quantityP);
        

    });
    // plus butonuna ulaştım.
    
    quantityControllerDiv.lastElementChild.addEventListener("click", ()=>{
        quantityP.innerText = parseInt(quantityP.innerText) + 1
        calculateProductTotal(quantityP);

    });
});
const calculateProductTotal = (quantityP) =>{
    let productInfoDiv = quantityP.parentElement.parentElement;
    const productPrice = parseFloat(productInfoDiv.querySelector("strong").innerText);

    let productTotalPrice = productPrice * parseInt(quantityP.innerText);
    console.log(productTotalPrice);
    let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
    productTotalDiv.innerText = productTotalPrice.toFixed(2);
    calculateCartTotal();

}

const calculateCartTotal = () =>{
    var panel=document.querySelector("#panel");
    let productTotalPrices = document.querySelectorAll(".product-line-price");
    let subtotal = 0;
    console.log(productTotalPrices);
    productTotalPrices.forEach((productPrice)=>{
        subtotal += parseFloat(productPrice.innerText);
        
    });
    // let taxPrice = subtotal * taxRate; 
    //localstorage deki değişkeni çektik.
    let taxPrice = subtotal * parseFloat(localStorage.getItem("taxRate"));
    let shipping = (subtotal > 0 ? shippingPrice : 0);
    let cartTotal = subtotal + taxPrice + shipping;
                                              //p  lerdeki 2.cocugu aldık  
    document.querySelector("#cart-subtotal").lastElementChild.innerText = subtotal.toFixed(2);
    document.querySelector("#cart-tax ").lastElementChild.innerText = taxPrice.toFixed(2);
    document.querySelector("#cart-shipping ").lastElementChild.innerText = shipping.toFixed(2);
    document.querySelector("#cart-total p:nth-child(2)").innerText = cartTotal.toFixed(2);
    
    
}
document.querySelectorAll(".remove-product").forEach((removeButton)=>{
    removeButton.addEventListener("click", () =>{
        removeProduct(removeButton);
    });
});

const removeProduct = (removeButton) =>{
    removeButton.parentElement.parentElement.parentElement.remove();
    calculateCartTotal();
}


   

