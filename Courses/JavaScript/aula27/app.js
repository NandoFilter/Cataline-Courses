// Requisições AJAX
// Carregar informações de APIs sem precisar recarregar a página

var button = document.querySelector( '#app button' )

button.addEventListener( 'click', function() {
    var xhr = new XMLHttpRequest()

    xhr.open( 'GET', 'https://api.github.com/users' )
    xhr.send()

    // Quando o estátua da requisição mudar, executa a função
    xhr.onreadystatechange = function() {
        // Se está finalizado
        if ( xhr.readyState === 4 ) {
            var data = JSON.parse( xhr.responseText )
            console.log( data[0].login );
        }
    }
} )