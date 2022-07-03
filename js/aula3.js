var buttom = document. querySelector("button");

buttom.onclick = function() {
var nome = prompt ("Qual o comando para iniciar um repositorio novo no GitBash");
if (( nome !== "git init"))
{ alert ("O comonando " +  nome + " está errado ou foi digitado de forma incorreta tente novamente!")}
else {
    alert  ("Resposta correta!")
  }
}