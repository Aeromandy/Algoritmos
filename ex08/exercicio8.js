let raio = Number(prompt('Por favor, digite o valor do raio '))
let altura = Number(prompt('Por favor, digite o valor da altura '))

area = Math.pow(raio, 2) * Math.PI

volume = area * altura

alert('O volume é ' + volume)