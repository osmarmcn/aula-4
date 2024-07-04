

// let cont = 0

 // 1 questão
// while(cont <=10){
//      console.log(cont)
//     cont += 1
   
// }

// 2 questão

// let continuar = true
// let soma = 0

// while(continuar){
//     let num = Number(prompt('digite um numero: '))
//     soma += num
//     console.log(soma)
//     if(isNaN(num)){
//         console.log('você digitou uma letra ou caractere')
//         continuar = false
//     }
    
    
// }

// 3 questao

// let aleatorio = Math.floor(Math.random() * 10)
// console.log(aleatorio)

// while(true){
//     let eu = Number(prompt('sua escolha: '))
//     if(eu === aleatorio){
//         console.log('você acertou')

//     }if(eu > aleatorio){
//         console.log('você nao acertou, numero maior que o escolhido')

//     }else if(eu < aleatorio){
//         console.log('você nao acertou, numero menor que o escolhido')

//     }else{
//         console.log('você acertou')
//         break
//     }
// }

// 4 questão

let saldo = 0
let depositar
let sacar 
let continuar = true

while(continuar){

    let op = Number(prompt('escolha sua opção: \n 1 - extrato \n 2 - depositar \n 3- sacar \n 4 - sair'))
    switch(op){
        case 1:
            alert(`seu saldo: ${saldo}`)
            break

        case 2:
            depositar = Number(prompt('valor a depositar: '))
            saldo += depositar
            
            alert( `deposito com sucesso! saldo: ${saldo}`)
            break

        case 3:

            sacar = Number(prompt('valor do saque:'))
            if (sacar > saldo){
                alert('saldo insuficiente!')

            }else{
                saldo -= sacar
                alert( `saque com sucesso! saldo: ${saldo}`)
                break
            }

        case 4:
            alert('ate logo!')
            continuar = false

        default:
            break
            

    }
}

