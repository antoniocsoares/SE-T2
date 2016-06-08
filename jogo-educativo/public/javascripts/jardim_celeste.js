/**
 * Created by antonio on 05/06/2016.
 */
$( document ).ready(function() {
    var timeout = null;
    console.log( "ready!" );
    $("#logo-image, #home-btn").click(function () {
        document.location.href="/";
    });
    $("#menu-jogos-btn").click(function () {
        document.location.href="/jogos";
    });
    $("#question1").click(function () {
        console.log("cliquei questão 1");
        $("#questionsModal").attr("group","1").modal('toggle');
    });
    $("#question2").click(function () {
        console.log("cliquei questão 2");
        $("#questionsModal").attr("group","2").modal('toggle');
    });
    $("#question3").click(function () {
        console.log("cliquei questão 3");
        $("#questionsModal").attr("group","3").modal('toggle');

    });
    $('#questionsModal').on('shown.bs.modal', function (e) {
        var timer = 180;
        $('#countdown').text(timer);

        // TODO get questions
        var groupNumber = $('#countdown').attr("group");
        var modalBody = $('.modal-body');
        modalBody.empty();
        for (var i = 0; i < 10; i++) {
            var group = document.createElement("div");
            group.setAttribute("class","question-group");
            group.setAttribute("id","question-"+i);
            // question
            var q = document.createElement("p");
            q.textContent= "O que é?";
            group.appendChild(q);
            // first question
            var awDiv1 = document.createElement("div");
            awDiv1.setAttribute("class", "answer-box");
            var aw1 = document.createElement("input");
            aw1.setAttribute("type", "radio");
            aw1.setAttribute("name", "answer-"+i);
            aw1.setAttribute("value", "certo");
            var aw1Label = document.createElement("label");
            aw1Label.textContent = "Certo!";
            awDiv1.appendChild(aw1);
            awDiv1.appendChild(aw1Label);
            group.appendChild(awDiv1);
            // 2nd
            var awDiv2 = document.createElement("div");
            awDiv2.setAttribute("class", "answer-box");
            var aw2 = document.createElement("input");
            aw2.setAttribute("type", "radio");
            aw2.setAttribute("name", "answer-"+i);
            aw2.setAttribute("value", "errado");
            var aw2Label = document.createElement("label");
            aw2Label.textContent = "Errado!";
            awDiv2.appendChild(aw2);
            awDiv2.appendChild(aw2Label);
            group.appendChild(awDiv2);
            // 3rd
            var awDiv3 = document.createElement("div");
            awDiv3.setAttribute("class", "answer-box");
            var aw3 = document.createElement("input");
            aw3.setAttribute("type", "radio");
            aw3.setAttribute("name", "answer-"+i);
            aw3.setAttribute("value", "errado");
            var aw3Label = document.createElement("label");
            aw3Label.textContent = "Errado!";
            awDiv3.appendChild(aw3);
            awDiv3.appendChild(aw3Label);
            group.appendChild(awDiv3);
            modalBody.append(group);
        }
        timeout = setInterval(function () {
            if(timer > 0)
                timer -= 1;
            $('#countdown').text(timer);
            if(timer === 0){
                checkValidQuestions(groupNumber);
                clearTimeout(timeout);
            }
        },1000);
    });
    $("#questionsModal").on('hidden.bs.modal',function (event) {
        clearTimeout(timeout);
    });

});
function checkValidQuestions() {

}