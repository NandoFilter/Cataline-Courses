var button = document.querySelector('#app button')
var input = document.querySelector('#app input#idade')

button.addEventListener('click', function () {
    alert( `Sua idade é ${input.value}` )
})