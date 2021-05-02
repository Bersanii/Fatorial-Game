function verificar(){
    //Pega os dados dos campos
    var nomeUsuario = document.querySelector("#nameUser")
    var level = document.getElementsByName('level')
    var res = document.querySelector("#res")
    var verificaDados = 0

    // Verifica se o usuario inseriu um nome e salva no sessionStorage
    if(nomeUsuario.value.length == 0){
        res.innerHTML = `Insira um nome`
    }else{
        //salva o nome no localStorage
        localStorage.setItem("jogador", `${nomeUsuario.value}`)
        //cria o pontos
        if(localStorage.getItem("pontos") == null){
            localStorage.setItem("pontos", 0)
        }else{
            localStorage.setItem("pontos", 0)
        }
        

        //cria uma lista com os numeros aleatorios de 1 a 30 e salva no sessionStorage
        var lista = []

        while (lista.length < 5){
            var r = Math.floor(Math.random() * (30 - 1)) + 1;
            if(lista.indexOf(r) === -1) lista.push(r);
        }
        sessionStorage.setItem("lista", JSON.stringify(lista));

        window.location.href = "../Fatorial/fatorial.html"
    }
}