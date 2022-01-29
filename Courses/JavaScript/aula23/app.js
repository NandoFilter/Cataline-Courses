var app = document.querySelector( 'div#app' )

// Adicionar Elementos no HTML ---------------------------

// <a href="https://google.com">Visitar Google</a>

var link = document.createElement( 'a' )
var textLink = document.createTextNode( 'Visitar Google' )

// link.href = 'https://google.com'

link.setAttribute( 'href', 'https://google.com' )
link.appendChild( textLink )

app.appendChild ( link )

// Remover Elementos no HTML -----------------------------

var text = document.querySelector( 'div#app p' )

app.removeChild( text )