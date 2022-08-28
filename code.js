// Cambio:
// Texto
let input = document.querySelector(".input");
const output = document.querySelector(".output");
// Botones
const botonEncritptar = document.querySelector("#Encriptar");
const botonDesencritptar = document.querySelector("#Desencriptar");
const botonCopiar = document.querySelector("#copiar");
// Estilos
const imagenMuñeco = document.querySelector("#imagen-muñeco");
const textoOutput = document.querySelector("#texto-output");
const containerOutput = document.querySelector(".container-output")
const divOutput = document.querySelector("#espacio-output");


const encriptar = () => {
    
    let texto = input.value
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    cambioPantalla(texto);    
}
const desencriptar = () => {

    let texto = input.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    cambioPantalla( texto);    
}
const cambioPantalla = (texto) => {
    cambioEstilos();
    output.value=`${texto}`
    texto="";
}
const cambioEstilos = () => {
    output.rows="10"
    botonCopiar.style.display="block"
    containerOutput.style.justifyContent="normal"
    divOutput.style.width="100%"
    imagenMuñeco.style.display="none"
    textoOutput.style.display="none"
}
const copiar = () => {
    output.select();
    document.execCommand('copy');
}
const codificar = (accion)=>{
    if (input.value == "" ){
        alert("para encriptar necesita que escribas algo")
    }else {
        for (let i = 0; i < input.value.length; i++) {
            if (verificar(input.value.substring(i, i + 1))==false){
                output.value="El texto no se encuentra escrito correctamente"
                break
            }
            else{
                accion();  
            }
        }
    }
}
const verificar=(i)=> {
    i=i.toLowerCase()
    // verifica los caracteres uno por uno
    if (i.charCodeAt()>96&&i.charCodeAt()<123||i.charCodeAt()==46||i.charCodeAt()==10||i.charCodeAt()==32||i.charCodeAt()==44||i.charCodeAt()>47&&i.charCodeAt()<58) {
        return true;
    }
    alert("No usar: tildes ni caracteres especiales");
    return false;
    
}

botonEncritptar.addEventListener("click",()=>{
    codificar(encriptar)
})
botonDesencritptar.addEventListener("click",()=>{
    codificar(desencriptar)
})
botonCopiar.addEventListener("click",()=>{
    if (output.value != ""){
        copiar();
    }
})

