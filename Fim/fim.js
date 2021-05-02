var mostraDados = document.querySelector("#dados")
var nomeUsuario = localStorage.getItem("jogador")
var pontos = localStorage.getItem("pontos")
var tempo = localStorage.getItem("tempo")

//Scoreboard
// localStorage.setItem("scoreboard", [
//     {
//         nome: nomeUsuario,

//     }
// ])

mostraDados.innerHTML = `
    <div class="text-center">Jogador: <strong>${nomeUsuario}</strong></div>
    <div class="text-center">Você acertou <strong>${pontos}</strong> pergunta(s) em <strong>${tempo}</strong></div>
`