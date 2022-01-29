var app = document.querySelector( 'div#app' )

console.log( app.outerHTML ); // Todo o HTML do Documento
console.log( app.innerHTML ); // HTML interno
console.log( app.innerText ); // Todo o Texto, sem Tags

app.innerText = 'Olá'

console.log( app.innerText );