const barra = document.querySelectorAll('.barra');
let gastoDia = document.querySelectorAll('.gasto-dia')

fetch("data.json").then((response) => {
    response.json().then((valores) => {
        for (let i = 0; i < valores.length; i++) {
            valorFinal = valores[i].amount
            gastoDia[i].innerHTML = `$${valorFinal}`
        }
    }) 
})

barra.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.previousElementSibling.classList.remove('hidden')
    })

    item.addEventListener('mouseout', () => {
        item.previousElementSibling.classList.add('hidden')
    })
});