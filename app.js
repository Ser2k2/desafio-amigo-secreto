// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    
    let nombre = document.getElementById('amigo').value;
  
    if (nombre === '') {

        alert('Por favor, inserte un nombre!')
        
    } else {

        amigos.push(nombre);

        let lista = '';    
    
        for (let i = 0; i < amigos.length; i++) {
            
            lista += '<li>' + amigos[i] + '</li>';
        }  
         
                
         document.getElementById('listaAmigos').innerHTML = lista;
         document.getElementById('amigo').value = '';

    }    
}

function sortearAmigo() {

    
    if (amigos.length === 0) {

        alert('Por favor, inserte un nombre!')

    } else {

        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    
        document.getElementById('listaAmigos').innerHTML = `El amigo sorteado es: ${amigos[numeroAleatorio]}`;

    }
    
    

}

