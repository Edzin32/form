document.getElementById("nomeUsuario").focus()

function configurarData() {
    var data = document.getElementById("datanasc").value;
    data = data.replace(/\//g, "-");
    var partesData = data.split("-");
   


    if (partesData[0].length != 4) {
        data = new Date(partesData[2] + "-" + partesData[1] + "-" + partesData[0]); 
    }
    var hoje = new Date();
    var idade = hoje.getFullYear() - parseInt(partesData[0]);
    
    if(hoje.getMonth()+1<parseInt(partesData[1])){
        idade--
    }
    if(hoje.getMonth()+1==parseInt(partesData[1])&&hoje.getDate()<parseInt(partesData[0])){
        idade--
    }
    if(hoje.getFullYear()==parseInt(partesData[0])&&hoje.getMonth()+1==parseInt(partesData[1])){
        
        idade++
        if(hoje.getDate()<parseInt(partesData[2])){
        alert("data invalida");
         document.getElementById('datanasc').value=''
        document.getElementById('idade').value=''
        }
    }
    console.log(idade)
    if(idade<0){
        alert("coloque uma data anterior a atual") 
        document.getElementById('datanasc').value=''
        document.getElementById('idade').value=''
    }else{
    document.getElementById('idade').value = idade;
    return true
    }
    
}
function confirmaSenha() {
    var senha = document.getElementById("senha").value
    var confirmaSenha = document.getElementById("Confirmasenha").value
    console.log(senha, confirmaSenha)
    if (senha == confirmaSenha) {
        alert("Senhas valida")
        document.getElementById("datanasc").value = "";
    } else {
        alert("Senha inválida")
        document.getElementById("senha").value = ""
        document.getElementById("Confirmasenha").value = ""
    }
    return true;
    
}
function validaCPF() {
    var soma = 0;
    var resto;
    var CPF = String(document.getElementById("cpf").value).replace(/[^\d]/g, '');


    if (CPF.length !== 11) {
        alert("CPF deve ter 11 caracteres!");
        return false;
    }


    if (/^(\d)\1+$/.test(CPF)) {
        alert("CPF inválido!");
        return false;
    }


    for (let i = 0; i < 9; i++) {
        soma += parseInt(CPF.substring(i, i + 1)) * (10 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto != parseInt(CPF.substring(9, 10))) {
        alert("CPF inválido!");
        return false;
    }

    soma = 0;


    for (let i = 0; i < 10; i++) {
        soma += parseInt(CPF.substring(i, i + 1)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto != parseInt(CPF.substring(10, 11))) {
        alert("CPF inválido!");
        return false;
    }

    alert("CPF válido!");
    document.getElementById("tel").focus();
    return true;
}
function verificaNome(){
    let nome=document.getElementById("nomeUsuario").value;
    let nomepalavras=nome.split(' ');
    if(nomepalavras.length<=0){
        document.getElementById("nomeUsuario").focus();
    }
    let verifica
    for(let i=0;i<nomepalavras.length;i++){
        let palavra=nomepalavras[i]
        console.log(palavra[0])
        if(palavra[0]!== palavra[0].toUpperCase()||palavra.slice(1) !== palavra.slice(1).toLowerCase()){
            verifica=false;
            break;
        }else{
            verifica=true
        }
    }
    
    if(!verifica){
        alert("O nome do usuário deve conter pelo menos a primeira letra do nome maiuscula")
        document.getElementById("nomeUsuario").focus();
        document.getElementById("nomeUsuario").value=""
        
    }else{
        console.log("chegou aq")
        document.getElementById("datanasc").focus();
        return true;
        
    }
   
}

    function registro() {
       
        var dataValida = configurarData();
        var senhaValida = confirmaSenha();
        var cpfValido = validaCPF();
        var nomeValido = verificaNome();
    
        
        if (dataValida && senhaValida && cpfValido && nomeValido) {
            alert("Itens registrados");
        } else {
            alert("Verifique os campos. Há erros no formulário.");
        }
    }
