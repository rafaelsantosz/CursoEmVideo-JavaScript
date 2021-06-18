function contar(){
    let msg=document.getElementById("msg")
    let inicio=document.getElementById("inicio")
    let fim=document.getElementById("fim")
    let passo=document.getElementById("passo")
    let i=Number(inicio.value)
    let f=Number(fim.value)
    let p=Number(passo.value)

    if(i=="" || f==""){
        window.alert("Faltam dados..Preencha corretamente!")
    
    }else{
        if(p==0){
            window.alert("[0 não é permitido, PASSO irá receber o numero 1]")
            p=1
        }
        msg.innerHTML="Contagem: "
        if(i<f){
            for(i;i<=f;i+=p){
                msg.innerHTML+=` <${i}> `
            }   
        }else{
            for(i;i>=f;i-=p){
                msg.innerHTML+=` <${i}> `
        }
        }
    msg.innerHTML+=" Fim!" 
    }
}  