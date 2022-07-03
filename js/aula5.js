var buttom = document. querySelector("button");

buttom.onclick = function() {
var nome = prompt ("Qual é o comando para estrar em uma pasta?");
if (( nome !== "cd"))
{ alert ("O comonando " +  nome + " está errado ou foi digitado de forma incorreta tente novamente!")}
else {
    alert  ("Resposta correta!")
  }
}