
let $ = document
let startDivElem = $.querySelector('.start')
let containerDiv = $.querySelector('.container')
let resultPElem = $.querySelector('.main-result')
let keyNameBox = $.querySelector('.key-name')
let locationKeyBox = $.querySelector('.key-location')
let keyCodeBox = $.querySelector('.key-code')
let keyWhichBox = $.querySelector('.key-which')

document.body.addEventListener('keydown', function (event) {
    event.preventDefault()
    startDivElem.style.display = 'none'
    containerDiv.style.display = 'block'
    containerDiv.style.marginTop = '7px'
    resultPElem.innerHTML = event.keyCode
    keyNameBox.innerHTML = event.key
    locationKeyBox.innerHTML = event.location
    keyCodeBox.innerHTML = event.code
    keyWhichBox.innerHTML = event.which

})