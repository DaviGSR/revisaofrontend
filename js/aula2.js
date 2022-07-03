var buttom = document. querySelector("button");

buttom.onclick = function() {
var nome = prompt ("Qual é o comando para ver as condições do repositorio?");
if (( nome !== "git status"))
{ alert ("O comonando " +  nome + " está errado ou foi digitado de forma incorreta tente novamente!")}
else {
    alert  ("Resposta correta!")
  }
}