const searchBox=document.querySelector("#search-input")
const products=document.querySelectorAll(".product-item");
const button=document.querySelectorAll(".filter")
const priceButton=document.getElementById("search-price").querySelector("button");

const changeClass=(filter)=>{
   button.forEach(button=>{
    if(button.dataset.filter === filter){
        button.classList.add("selected")
    }else{
        button.classList.remove("selected")
    }
   }) 
}

const searchHandler=(event)=>{
    let searchWords=event.target.value.toLowerCase().trim();
    products.forEach(product =>
        {
            const productName = product.children[1].innerText.toLowerCase();
            if(productName.includes(searchWords)){
                product.style.display="block";
            }else{
                product.style.display="none";
            }
        })
}

const buttonHandler=(event)=>{
    const filter=event.target.dataset.filter;
    changeClass(filter)
    products.forEach(product =>{
        const category=product.dataset.category;
        if(filter === "all"){
            product.style.display="block"
        }else{
            filter === category ?
            (product.style.display="block") :
            (product.style.display="none")
        }
    })
}
const searchPriceHandler=(event)=>{
    const searchPrice= +event.target.parentElement.children[0].value;

    products.forEach(product =>{
        const productPrice=product.children[2].innerText;
        const price= +productPrice.split(" ")[1]

        if(!searchPrice){
            product.style.display = "block"
        }else{
            searchPrice === price ?
            (product.style.display = "block") :
            (product.style.display = "none")
        }
    })
}
const start=()=>{
    button.forEach(button =>{
        button.addEventListener("click", buttonHandler)
    })
    searchBox.addEventListener("keyup", searchHandler)
    priceButton.addEventListener("click", searchPriceHandler)
}

window.addEventListener("load", start)