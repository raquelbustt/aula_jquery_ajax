function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").nodeValue;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    console.log(url);

    console.log()
    $.ajax({
        url: url,
        type: "GET",
        sucess: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
            //$("#logradouro").html(response.logradouro); //setando
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //alert(response.logradouro);
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})