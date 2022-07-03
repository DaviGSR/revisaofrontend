var buttom = document. querySelector("button");

buttom.onclick = function() {
var nome = prompt ("Qual  o comando lista todos os diretórios?");
if (( nome !== "git ls"))
{ alert ("O comonando " +  nome + " está errado ou foi digitado de forma incorreta tente novamente!")}
else {
    alert  ("Resposta correta!")
  }
}