const itensLista = [
    {
		id: 1,
		resposta: 24
	},
	{
		id: 2,
		resposta: 120
	},
	{
		id: 3,
		resposta: 720
	},
	{
		id: 4,
		resposta: 5040
	},
	{
		id: 5,
		resposta: 118
	},
	{
		id: 6,
		resposta: 126
	},
	{
		id: 7,
		resposta: 30
	},
	{
		id: 8,
		resposta: 22
	},
	{
		id: 9,
		resposta: 122
	},
	{
		id: 10,
		resposta: 4
	},
	{
		id: 11,
		resposta: 20
	},
	{
		id: 12,
		resposta: 42
	},
	{
		id: 13,
		resposta: 11800
	},
	{
		id: 14,
		resposta: 6720
	},
	{
		id: 15,
		resposta: "1/12"
	},
	{
		id: 16,
		resposta: "1/3"
	},
	{
		id: 17,
		resposta: 12
	},
	{
		id: 18,
		resposta: 336
	},
	{
		id: 19,
		resposta: 90
	},
	{
		id: 20,
		resposta: 1320
	},
	{
		id: 21,
		resposta: 60
	},
	{
		id: 22,
		resposta: 252
	},
	{
		id: 23,
		resposta: 360
	},
	{
		id: 24,
		resposta: "1/3"
	},
	{
		id: 25,
		resposta: 220
	},
	{
		id: 26,
		resposta: 20
	},
	{
		id: 27,
		resposta: 4
	},
	{
		id: 28,
		resposta: 5
	},
	{
		id: 29,
		resposta: "5/7"
	},
	{
		id: 30,
		resposta: "16/3"
	}
]

var mostraPerg = document.querySelector("#pergunta")
var pontos = JSON.parse(localStorage.getItem("pontos", pontos))
var contadorPerg = 0

var mm = 0
var ss = 0
var tempo = 1000
var cron

startTimer()

function startTimer(){
	cron = setInterval(() => { timer() }, tempo)
}

function stopTimer(){
	clearInterval(cron)
	mm = 0
	ss = 0
}

function timer(){
	ss++
	if(ss == 60){
		ss = 0
		mm++
	}
	var format = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)

	document.getElementById("timer").innerText = format
}




function verificaresposta(numero, i){

    itensLista.map((val)=>{
        if(val.id == numero){
            resposta = val.resposta
        }
    })


    // []========(VERIFICA RESPOSTA USUARIO)========[]
    if(document.getElementById(`resposta${numero}`).value == resposta){
        alert("Acertou!")

        //[]====(SISTEMA DE PONTOS)====[]
        //é feita uma verificação na resposta para saber se ela é inteira ou não
        
        // let teste = '' + resposta + ' '
        // let confere = teste.indexOf('/')

        // if (confere > -1){       //se resposta não for inteira adiciona 100 pontos
        //     pontos += 100
        // }else{                   //se for inteira salva o resultado na respota em pontos
        //     pontos += resposta
        // }

		pontos ++

        
        //Salva os pontos no Local Storage!
        localStorage.setItem("pontos", null)
        localStorage.setItem("pontos", JSON.stringify(pontos))
        
    } else {
        alert("Errou!")
    }

	//Deixo a questão respondida invisivel
	document.getElementById(`pergunta${i}`).classList.add("hide")
	contadorPerg += 1

	// Verifica se o usuario respondeu todas as perguntas
	if(contadorPerg == 5){
		localStorage.setItem("tempo", document.getElementById("timer").innerText)
		window.location.href = "../Fim/fim.html"
	}
}

// []=====(EXIBE PERGUNTAS)=====[]
// Pega os numeros gerados aleatoriamente no session storage e salva em uma lista
var lista = JSON.parse(sessionStorage.getItem("lista"))
console.log(lista)

// Exibe as perguntas na tela montando um "Card"
for(var i = 0; i < lista.length; i++){      
    mostraPerg.innerHTML += `
	
	<div id="pergunta${i}" class="col-12 col-md-6 d-inline-flex">
		<div class="card mx-auto mb-5 px-4 py-4">
			<input class="inputId" disabled type="text" value="ID: ${lista[i]}"/>

			<div class="img">
				<img src="../Perguntas/${lista[i]}.svg" class="imgPergunta">
			</div>

			<div class="content">

				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="Resposta" autocomplete="off" id="resposta${lista[i]}">
					<input class="btn" type="button" onclick="verificaresposta(${lista[i]}, ${i})" value="Enviar"></input>
				</div>

			</div>
		</div>
	</div>
	
    `
}