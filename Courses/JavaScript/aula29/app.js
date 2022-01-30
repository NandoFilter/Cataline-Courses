var submitButton = document.querySelector( '#app form button' )
var zipCodeField = document.querySelector( '#app form input' )
var content = document.querySelector( '#app main' )

function createLine( data ) {
    if ( !data.empty ) {
        var line = document.createElement( 'p' )
        var text = document.createTextNode( data )
    
        line.appendChild( text )
        content.appendChild( line )
    }
 }

function run( event ) {
    event.preventDefault()

    var zipCode =  zipCodeField.value;

    zipCode = zipCode.replace( ' ', '' )
    zipCode = zipCode.replace( '.', '' )
    zipCode = zipCode.trim()

    axios.get( 'https://viacep.com.br/ws/' + zipCode + '/json/' )
         .then( function( response ) {
            if ( response.data.erro ) {
                throw new Error( 'CEP inválido' )
            }

            content.innerHTML = ''
            createLine( response.data.localidade + '/' + response.data.uf )
         } )
         .catch( function( error ) {
            console.log( error );
            content.innerHTML = ''
            createLine( 'Algo deu errado!' )
         } )
}

submitButton.addEventListener( 'click', run )