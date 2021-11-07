const taxRate = 0.18;
const shippingPrice = 15.0;
//Sayfa yüklendiğinde bu değişkenleri local storage at.

window.onload = () => {
    window.localStorage.setItem("taxRate", taxRate);  //localstorage verileri browser kapandığında kalır
    window.localStorage.setItem("shippingPrice", shippingPrice);

    window.sessionStorage.setItem("taxRate", taxRate);    //Browser kapandığında sessionın içerisi boşalır
    window.sessionStorage.setItem("shippingPrice", shippingPrice);

}

let quantityControllerDivs = document.getElementsByClassName("quantity-controller");
console.log(quantityControllerDivs);

[...quantityControllerDivs].forEach((quantityControllerDiv)=>{
    //minus butonuna ulaştım.
    quantityControllerDiv.firstElementChild.addEventListener("click", ()=>{
        let quantityP = quantityControllerDiv.querySelector("#product-quantity")
        quantityP.innerText = parseInt(quantityP.innerText) - 1

    });
    // plus butonuna ulaştım.
    quantityControllerDiv.firstElementChild.addEventListener("click", ()=>{

    });
});