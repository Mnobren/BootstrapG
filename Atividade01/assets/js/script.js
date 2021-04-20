let lab;

function validarNome()
{
    if(document.querySelector('#nome').value.length < 3)
    {
        lab = document.querySelector('#nomeval');
        lab.style.color = "red";
        lab.innerHTML = "nome inválido";
    }
    else
    {
        lab = document.querySelector('#nomeval');
        lab.style.color = "green";
        lab.innerHTML = "nome válido";
    }
}

function validarEmail()
{
    if(document.querySelector("#email").value.indexOf('@') == -1 || document.querySelector("#email").value.indexOf('.') == -1)
    {
        lab = document.querySelector("#emailval");
        lab.style.color = "red";
        lab.innerHTML = "email inválido";
    }
    else
    {
        lab = document.querySelector("#emailval");
        lab.style.color = "green";
        lab.innerHTML = "email válido";
    }
}

function validarAssunto()
{
    if(document.querySelector('#assunto').value.length > 100)
    {
        lab = document.querySelector('#assunval');
        lab.style.color = "red";
        lab.innerHTML = "assunto inválido";
    }
    else
    {
        lab = document.querySelector('#assunval');
        lab.style.color = "green";
        lab.innerHTML = "assunto válido";
    }
}

function enviar()
{
    alert("Enviado com sucesso");
} 