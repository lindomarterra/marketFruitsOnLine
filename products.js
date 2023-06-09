
const btnAddProduct=document.getElementsByClassName('btnAddProduct')
for(let i=0; i<btnAddProduct.length;i++){
  btnAddProduct[i].addEventListener('click', addingProductToCart)
}

function addingProductToCart(event){

  const button=event.target
  const infosProduct=button.parentElement.parentElement.parentElement.parentElement.parentElement
  const imageProduct=infosProduct.getElementsByClassName('imgProduct')[0].src
  const nameProduct=infosProduct.getElementsByClassName('nameProduct')[0].innerText
  const priceProduct=infosProduct.getElementsByClassName('priceProduct')[0].innerText
  
  console.log(priceProduct)
  localStorage.setItem('btnProduct', priceProduct)
}


 
