var buttom = document. querySelector("button");

buttom.onclick = function() {
var nome = prompt ("Qual comando para adiciona um arquivo ao repositório repositorio?");
if (( nome !== "git add"))
{ alert ("O comonando " +  nome + " está errado ou foi digitado de forma incorreta tente novamente!")}
else {
    alert  ("Resposta correta!")
  }
}

