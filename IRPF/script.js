function calcular() {

    var res = document.getElementById('res')
    var salb = Number.parseInt(document.getElementById('salb').value)

    var n1 = salb*220
    var n2 = n1*(5/100)
    var n3 = n1*(10/100)
    var n4 = n1*(11/100)
    var n5 = n2+n3
    var n6 = n1-n5
    
    var n12 = n1*0
    var n22 = n1*(10/100)
    var n23 = n1*(20/100)

    var n51 = n22+n3
    var n52 = n23+n3

    var n61 = n1 - n51
    var n62 = n1 - n52

    if (n1 >= 0 && n1 <= 900) {

        res.innerHTML =
        `<p>Salario Bruto: R$${n1}</p>
        <p>(-) IR (ISENTO 0%): R$${n12}</p>
        <p>(-) INSS ( 10%): R$${n3}</p>
        <p>FGTS (11%): R$${n4}</p>
        <p>Total de descontos: R$${n5}</p>
        <p>Salário Liquido: R$${n6}</p>`
    

     
    } else if ( n1 >= 900 && n1 <= 1500) {

         res.innerHTML =
         `<p>Salario Bruto: R$${n1}</p>
         <p>(-) IR (0%): R$${n2}</p>
         <p>(-) INSS ( 10%): R$${n3}</p>
         <p>FGTS (11%): R$${n4}</p>
         <p>Total de descontos: R$${n5}</p>
         <p>Salário Liquido: R$${n6}</p>`
     } else if ( n1 >= 1500 && n1 <= 2500) {
        
         res.innerHTML =
         `<p>Salario Bruto: R$${n1}</p>
         <p>(-) IR (10%): R$${n22}</p>
         <p>(-) INSS ( 10%): R$${n3}</p>
         <p>FGTS (11%): R$${n4}</p>
         <p>Total de descontos: R$${n51}</p>
         <p>Salário Liquido: R$${n61}</p>`

     } else if (n1 >= 2500) {
                
         res.innerHTML =
         `<p>Salario Bruto: R$${n1}</p>
         <p>(-) IR (20%): R$${n23}</p>
         <p>(-) INSS ( 10%): R$${n3}</p>
         <p>FGTS (11%): R$${n4}</p>
         <p>Total de descontos: R$${n52}</p>
         <p>Salário Liquido: R$${n6}</p>`

     } else {
        alert('ERRO! TENTE NOVAMENTE.')

     }
    
    
   

    
}