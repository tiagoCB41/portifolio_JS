
function voltar (){
    document.getElementById("flipper").classList.toggle('flip');
    document.getElementById("msgError").innerHTML = ""
}

function verifyEmail(){
    verifyArroba = false
    verifyPonto = false
    verifyNome = false
    verifyDominio = false
    veirfyCom = false

    emailValido = false
    email = ""
    nomeChars = 0
    arrobaChars = 0
    dominioChars = 0
    pontoChars = 0
    


    email = document.getElementById("inputEmail").value
    for(i=0; i < email.length - 2; i++){
        com(email[i], email[i+1], email[i+2])
        pontos(email[i])
        dominio()
        arroba(email[i])
        nome()
    }

    if (verifyArroba && verifyPonto && verifyNome && verifyDominio && veirfyCom){
        emailValido = true
        document.getElementById("flipper").classList.toggle('flip');    
    }else{
        document.getElementById("msgError").innerHTML = "email inválido, digite um email válido. EX: nome@dominio.com"
        console.log("error")
    }
}


function nome () {
    if (!verifyArroba){
        nomeChars ++
    }
    if (nomeChars > 3){
        verifyNome = true
    }
}


function arroba (element){
    if(element == "@" && verifyNome == true){
        verifyArroba = true
        arrobaChars ++
    }
    if(arrobaChars > 1){
        verifyArroba = false
    }
}


function dominio (){
    if(verifyNome && verifyArroba && !verifyPonto){
        dominioChars++
    }
    if(dominioChars > 3) {
        verifyDominio = true
    }
}


function pontos(elemento) {
    if(elemento == "." && verifyNome && verifyArroba && verifyDominio){
        verifyPonto = true
        pontoChars++
    }
    if(pontoChars > 1) {
        verifyArroba == false
    }
}

function com(ele1, ele2, ele3){
    if (verifyPonto && ele1 == "c" && ele2 == "o" && ele3 == "m") {
        veirfyCom = true
    }
}

//ASS: tiagoCB