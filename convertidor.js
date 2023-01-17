const actualizar = document.querySelector(".botn1")
//const UprecioUSDUSD = 0;
const precioProducto = document.querySelector(".valorProd")
var hayPrecio = false
let precio


let taza = document.querySelector('.check')



actualizar.addEventListener("click", ()=>{
    precioUSD = parseFloat(document.querySelector(".valorDolar").value);
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

const convertir = document.querySelector(".botn2")
convertir.addEventListener("click", ()=>{
    conversion()
})


precioProducto.addEventListener("keyup",(e)=>{
    let tecla = e.key;
    if (tecla == 'Enter'){
        console.log(hayPrecio)
        conversion()
        
    }
    
})


taza.addEventListener("click",()=>{
    conversion()
})




const conversion = () =>{
    if (taza.checked == true){
        total = 800
    }
    else{
        total = 0
    }


    if (hayPrecio = true){

        if (precioProducto.value > 50){
            
            excedente = parseFloat(precioProducto.value) - 50
            mitadExcedente = excedente / 2
            impuestos = parseFloat(precioProducto.value) + mitadExcedente
            total = total + impuestos * precioUSD
            
            
            texto = `<h1 class="amigo">AR$<b style=color:red>${total.toFixed(2)}</b></h1>`
        }
        else{
            total = total + precioProducto.value * precioUSD
            texto = `<h1 class="amigo">AR$<b style=color:#386641>${total.toFixed(2)}</b></h1>`
        }
        let div = document.querySelector(".precioEnDolares")
        div.innerHTML = texto
    }
    else{
        alert('Flaqui ingresa un precio')
    }
}




    
