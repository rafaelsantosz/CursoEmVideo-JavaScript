function tabuada(){
    let numero=document.getElementById("numero")
    let tab=document.getElementById("tabuada")

    if(numero.value.length==0){
        window.alert("Digite um número!")
    }else{
        let num=Number(numero.value)
        tab.innerHTML=""
        for(let c=0;c<=10;c++){
            let item=document.createElement("option")
            item.text=`${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
}