const actualizar = document.querySelector(".botn")
//const UprecioUSDUSD = 0;
const precioProducto = document.querySelector(".valorProd")
var hayPrecio = false
let precio
actualizar.addEventListener("click", ()=>{
    precioUSD = parseInt(document.querySelector(".valorDolar").value);
    if (isNaN(precioUSD)){
        alert('Ingrese el valor del dolar tarjeta actual')
    }
    else{
        texto = `<p class="tex">Precio dólar ingresado: $${precioUSD}</p>`
        let div = document.querySelector(".precioIng")
        div.innerHTML = texto
        hayPrecio = true
        precioProducto.disabled = false
    }
    
})


precioProducto.addEventListener("keyup",(e)=>{
    let tecla = e.key;
    if (tecla == 'Enter'){
        console.log(hayPrecio)
        if (hayPrecio = true){
            if (precioProducto.value > 50){
                
                excedente = parseInt(precioProducto.value) - 50
                mitadExcedente = excedente / 2
                impuestos = parseInt(precioProducto.value) + mitadExcedente
                total = impuestos * precioUSD
                
                
                texto = `<h1 class="amigo">AR$<b style=color:red>${total.toFixed(2)}</b></h1>`
            }
            else{
                total = precioProducto.value * precioUSD
                texto = `<h1 class="amigo">AR$<b style=color:#386641>${total.toFixed(2)}</b></h1>`
            }
            let div = document.querySelector(".precioEnDolares")
            div.innerHTML = texto
        }
        else{
            alert('Flaqui ingresa un precio')
        }
        
        
    }
    

})





    
