/**
 * Created by antonio on 05/06/2016.
 */
$( document ).ready(function() {
    console.log( "ready!" );
    $('#logo-image, #home-btn').click(function () {
        document.location.href="/";
    });
    $('#jardim-block').click(function () {
        document.location.href="/jardim-celeste";
    });
});