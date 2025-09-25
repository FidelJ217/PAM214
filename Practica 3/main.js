import { restar } from "./utils.js";

console.log(restar(6,5));


//Ejercicio b:

function verificarUsuario(usuario){

    return new Promise((resolve, reject)=> {

     if ( usuario === "admin"){
        resolve ("Acceso concedido " + usuario)
     } else
        reject ("Acceso denegado " + usuario)
        

    });
 
}

verificarUsuario("admin")
.then(res => console.log(res))
.catch(err => console.log(err));


verificarUsuario("Ivan")
.then(res => console.log(res))
.catch(err => console.log(err)); 



//EJERCICIO C

function simularPeticionAPI(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    const result = await simularPeticionAPI();
    console.log(result);
    
}

obtenerDatos();