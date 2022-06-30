var buttom = document. querySelector("button");

buttom.onclick = function() {
var nome = prompt ("Qual é o comando para ver as condições do repositorio?");
if ((nome = "git status"))
{ alert ("O " +  nome + " serve para ver as condições do git. Parabéns voce acertou!")}
}