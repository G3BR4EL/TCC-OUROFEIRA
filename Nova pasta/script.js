

var request;
function login() {


    try {
        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;


        request = new XMLHttpRequest();
        request.addEventListener("readystatechange", processaDadoServidor, false);
        request.open('GET', 'http://4.228.227.52:8080/atividadelogin/autenticar?email=' + email + "&senha=" + senha, true)

        request.send("null")

    } catch (exception) {
        alert('Problema no envio de dados');
    }
}

function processaDadoServidor() {


    if (request.status == 200 && request.readyState == 4) {

        if (request.responseText == "true") {
            window.location.href = 'compras.html';
            window.alert("LogIn feito com sucesso!!!");

        }
        else {
            alert("Os dados informados estao errados, digite novamente")
        }


    }
}

function Cadrastodeclientes() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var endereço = document.getElementById("endereço").value;
    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;
    var datadenacimento = document.getElementById("datadenaimento").value;
   
}








