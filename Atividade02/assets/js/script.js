let lab;

function validarNome()
{
    if(document.querySelector('#nome').value.length < 3)
    {
        lab = document.querySelector('#nomefeedback');
        lab.style.color = "red";
        lab.innerHTML = "nome inválido";
        return false;
    }
    else
    {
        lab = document.querySelector('#nomefeedback');
        lab.style.color = "green";
        lab.innerHTML = "nome válido";
        return true;
    }
}

function validarEmail()
{
    if(document.querySelector("#email").value.indexOf('@') == -1 || document.querySelector("#email").value.indexOf('.') == -1)
    {
        lab = document.querySelector("#emailfeedback");
        lab.style.color = "red";
        lab.innerHTML = "email inválido";
        return false;
    }
    else
    {
        lab = document.querySelector("#emailfeedback");
        lab.style.color = "green";
        lab.innerHTML = "email válido";
        return true;
    }
}

function validarAssunto()
{
    if(document.querySelector('#assunto').value.length == 0)
    {
        lab = document.querySelector('#assuntofeedback');
        lab.style.color = "red";
        lab.innerHTML = "assunto inválido";
        return false;
    }
    else
    {
        lab = document.querySelector('#assuntofeedback');
        lab.style.color = "green";
        lab.innerHTML = "assunto válido";
        return true;
    }
}

function validarConteudo()
{
    if(document.querySelector('#conteudo').value.length > 100)
    {
        lab = document.querySelector('#conteudofeedback');
        lab.style.color = "red";
        lab.innerHTML = "conteúdo inválido";
        return false;
    }
    else
    {
        lab = document.querySelector('#conteudofeedback');
        lab.style.color = "green";
        lab.innerHTML = "conteúdo válido";
        return true;
    }
}

function enviar()
{
    if(validarNome() && validarEmail() && validarAssunto() && validarConteudo())
    {
        alert("Enviado com sucesso");
    }
    else
    {
        alert("Campos inválidos, Não enviado.");
    }
} 