var button = document.querySelector('#app button')
var input = document.querySelector('#app input#idade')

// PreventDefault: Cancela o evento se for cancelável, sem parar a propagação do mesmo.

button.addEventListener('click', function (event) {
    // Impede que o valor inserido suma após ação
    event.preventDefault()
    
    alert( `Sua idade é ${input.value}` )
})

var link = document.querySelector('#app a')

link.addEventListener('click', function (event) {
    // Remove a exibição do caminho na URL
    event.preventDefault()

    alert( 'Foi clicado' )
})