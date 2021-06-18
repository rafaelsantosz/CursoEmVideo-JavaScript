var val=[]
var msg=document.getElementById("msg")

function adicionar(){
    let num=document.getElementById("num")
    let tab=document.getElementById("tabela")
    let n=Number(num.value)
    
    msg.innerHTML=""

    function valido(n){
        if(Number(n)>=1 && Number(n)<=100){
            return true
        }else{
            return false
        }
    }

    function repetido(n, val){
        if(val.indexOf(Number(n))!=-1){
            return true
        }else{
            return false
        }
    }
    
    if(valido(n) && !repetido(n, val)){
        val.push(n)
        let item=document.createElement("option")
        item.text=`Número ${n}`
        tab.appendChild(item)
    }else{
        window.alert("[ERRO] Valor inválido ou já adicionado!")
    }          
}

function analisar(){
    msg.innerHTML=""
    if(val.length==0){
        msg.innerHTML="Digite um número primeiro!"
    }else{
        let maior=val[0]
        let menor=val[0]
        let soma=0

        for(let i in val){
            if(val[i]>maior){
                maior=val[i]
            }if(val[i]<menor){
                menor=val[i]
            }
        }

        for(let i in val){
            soma+=val[i]
        }

        let media = soma/val.length
        msg.innerHTML+=`Ao todo, foram adicionados <strong>${val.length}</strong> números<br>`
        msg.innerHTML+=`O maior número é o <strong>${maior}</strong> <br>`
        msg.innerHTML+=`O menor número é o <strong>${menor}</strong> <br>`    
        msg.innerHTML+=`A soma de todos os valores é <strong>${soma}</strong> <br>`
        msg.innerHTML+=`A média dos valores é <strong>${media}</strong <br>` 
    }    
}