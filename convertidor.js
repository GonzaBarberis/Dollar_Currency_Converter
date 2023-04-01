const actualizar = document.querySelector(".botn1")
//const UprecioUSDUSD = 0;
const precioProducto = document.querySelector(".valorProd")
var hayPrecio = false
let precio

let taza = document.querySelector('.check')

let price



const apiDolar = () =>{
    let url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

    let respuesta = fetch(url, {
      "method":"GET",
      "headers":{
        "Accept": "application/json",
        "Content-Type":"application/json"
      }
    }).then(response => response.json())
      .then(data => formatear(data))
    
    
}


const formatear = (data)=>{
    let dato = data[0]['casa']['venta']
    let totalAPI = parseFloat(dato) * 1.75
    price = totalAPI
    
}


apiDolar()


const datos1 = ()=>{
    setTimeout(function(){
        precioUSD = price
        texto = `<p class="tex"><i>Precio dólar tarjeta HOY: $${precioUSD}</i></p>`
        let div = document.querySelector(".precioIng")
        div.innerHTML = texto
        hayPrecio = true
        precioProducto.disabled = false
    }, 1700);
    
}

// actualizar.addEventListener("click", ()=>{
//     //precioUSD = parseFloat(document.querySelector(".valorDolar").
//     //value);
//     precioUSD = price
//     if (isNaN(precioUSD)){
//         alert('Ingrese el valor del dolar tarjeta actual')
//     }
//     else{
//         texto = `<p class="tex">Precio dólar ingresado: $${precioUSD}</p>`
//         let div = document.querySelector(".precioIng")
//         div.innerHTML = texto
//         hayPrecio = true
//         precioProducto.disabled = false
//     }
    
// })

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
        total = 1150
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










    
