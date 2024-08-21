function reajuste() {

    var salant = Number(document.getElementById('salant').value)
    var res1 = document.getElementById('res1')
    var res2 = document.getElementById('res2')
    var res3 = document.getElementById('res3')

    
    var n1 = salant*(20/100)
    var n2 = salant*(15/100)
    var n3 = salant*(10/100)
    var n4 = salant*(5/100)
    var m1 = n1 + salant
    var m2 = n2 + salant
    var m3 = n3 + salant
    var m4 = n4 + salant


    if (salant >= 1 && salant  <= 280) {
        res1.innerHTML = `O percentual é de 20%`  
        res2.innerHTML = `O valor do aumento foi de R$ ${n1}`
        res3.innerHTML = `O novo salário, após o aumento é de R$ ${m1}` 

    } else if (salant  >= 280 && salant <= 700) {
        res1.innerHTML = `O percentual é de 15%`  
        res2.innerHTML = `O valor do aumento foi de R$ ${n2} `
        res3.innerHTML = `O novo salário, após o aumento é de R$ ${m2}`

    } else if (salant >= 700 && salant <= 1500) {
        res1.innerHTML = `O percentual é de 10%`  
        res2.innerHTML = `O valor do aumento foi de R$ ${n3}`
        res3.innerHTML = `O novo salário, após o aumento de R$ ${m3}`

    } else if (salant > 1500) {
        res1.innerHTML = `O percentual é de 5%`  
        res2.innerHTML = `O valor do aumento foi R$ ${n4}`
        res3.innerHTML =`O novo salário, após o aumento é de R$ ${m4}`
        
        
    } else {
        alert('3RRO!Valor inválido!')
        
    }
}