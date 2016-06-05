/**
 * Created by antonio on 05/06/2016.
 */
$( document ).ready(function() {
    console.log( "ready!" );
    $('#bottom-left-btn').click(function () {
        document.location.href="/jogos";
    });
    $('#bottom-right-btn').click(function () {
        document.location.href="/crachas";
    });
});