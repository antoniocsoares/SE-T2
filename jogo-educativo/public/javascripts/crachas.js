/**
 * Created by Diogo on 08/06/2016.
 */

$( document ).ready(function() {
    console.log( "ready!" );
    $('#logo-image, #home-btn').click(function () {
        document.location.href="/";
    });
    //TODO mudar o nome de pesquisa do user de HARCODED para session name
    $.get("http://localhost:3000/utilizador/diogo", function(data, status){
        console.log("utilizador data is: ", data);
        if(data.badges.jardineiro == true)
        {
            console.log("ITS TRUE! SOU UM JARDINEIRO!");
            $('#crachaJardineiro').attr("src","images/jardineiro_badge_cor.png");
            $('#crachasFrase1').text("Parabéns! Conseguiste o crachá do Jardim da Celeste! Giro-flé-giro-flá!");
            $('#crachasFrase2').text("Continua a jogar para completares a coleção!");
        }
        else
        {
            console.log("FALSO! NAO SOU UM JARDINEIRO!");
            $('#crachaJardineiro').attr("src","images/jardineiro_badge_branco.png");
            $('#crachasFrase1').attr("textcontent","");
            $('#crachasFrase2').attr("textcontent","");
        }
    });
    $.get("http://localhost:3000/utilizadores", function(data, status){
        console.log("utilizadores data is: ", data);
        window.dataCenas = data;
        var count = 1;
        for (x in data) {
            $('#table > tbody:last-child').append('<tr><td>'+(parseInt(x)+1)+'</td>' +
                '<td>'+data[x].name+'</td>' +
                '<td>'+data[x].points+'</td></tr>');
        }

        //TODO: get pontuacao from session/storage e injetar na div de pontuacao
    });
});