/**
 * Created by antonio on 05/06/2016.
 */
$( document ).ready(function() {
    console.log( "ready!" );
    $('#logo-image, #home-btn').click(function () {
        document.location.href="/";
    });
    $('#menu-jogos-btn').click(function () {
        document.location.href="/jogos";
    });
    $('#question1').click(function () {
        console.log("cliquei questão 1");
    });
    $('#question2').click(function () {
        console.log("cliquei questão 2");
    });
    $('#question3').click(function () {
        console.log("cliquei questão 3");
    });
});