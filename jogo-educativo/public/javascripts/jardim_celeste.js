/**
 * Created by antonio on 05/06/2016.
 */

var timeout = null;

$( document ).ready(function() {
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
    $("#question-finish-btn").click(function () {
        checkValidQuestions();

    });
    $('#questionsModal').on('shown.bs.modal', function (e) {
        $.get("http://localhost:3000/perguntas/default", function(data, status){
            console.log("perguntas data is: ", data);

            var timer = 180;
            $('#countdown').text(timer);

            // TODO get questions
            var groupNumber = $('#countdown').attr("group");
            var modalBody = $('.modal-body');
            modalBody.empty();
            for (var i = 0; i < data.jardim.length; i++) {
                var perg = data.jardim[i];
                var group = document.createElement("div");
                group.setAttribute("class","question-group");
                group.setAttribute("id","question-"+i);
                // question
                var q = document.createElement("p");
                q.textContent= perg.pergunta;
                group.appendChild(q);
                // first question

                var certaIndex =  Math.floor(Math.random() * (perg.erradas.length+1));
                console.log("INDEX DA CORRETA: ",certaIndex);
                for (var j = 0; j < perg.erradas.length; j++)
                {
                    if(j === certaIndex)
                    {
                        var awDiv1 = document.createElement("div");
                        awDiv1.setAttribute("class", "answer-box");
                        var aw1 = document.createElement("input");
                        aw1.setAttribute("type", "radio");
                        aw1.setAttribute("name", "answer-"+i);
                        aw1.setAttribute("value", "certo");
                        var aw1Label = document.createElement("label");
                        aw1Label.textContent = perg.certa;
                        awDiv1.appendChild(aw1);
                        awDiv1.appendChild(aw1Label);
                        group.appendChild(awDiv1);


                    }

                    var awDiv2 = document.createElement("div");
                    awDiv2.setAttribute("class", "answer-box");
                    var aw2 = document.createElement("input");
                    aw2.setAttribute("type", "radio");
                    aw2.setAttribute("name", "answer-"+i);
                    aw2.setAttribute("value", "errado");
                    var aw2Label = document.createElement("label");
                    aw2Label.textContent = perg.erradas[j];
                    awDiv2.appendChild(aw2);
                    awDiv2.appendChild(aw2Label);
                    group.appendChild(awDiv2);

                    if(certaIndex >= perg.erradas.length && j == (perg.erradas.length-1))
                    {

                        var awDiv1 = document.createElement("div");
                        awDiv1.setAttribute("class", "answer-box");
                        var aw1 = document.createElement("input");
                        aw1.setAttribute("type", "radio");
                        aw1.setAttribute("name", "answer-"+i);
                        aw1.setAttribute("value", "certo");
                        var aw1Label = document.createElement("label");
                        aw1Label.textContent = perg.certa;
                        awDiv1.appendChild(aw1);
                        awDiv1.appendChild(aw1Label);
                        group.appendChild(awDiv1);
                    }

                }
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
    });
    $("#questionsModal").on('hidden.bs.modal',function (event) {
        clearTimeout(timeout);
        if(sessionStorage.username === undefined)
        {
            var username = prompt("Por favor insere o teu nome para gravar a pontuação.", "anónimo");

            if(username != null) {
                sessionStorage.username = username;
            }
        }
    });

});
function checkValidQuestions() {
    clearTimeout(timeout);
    
    var timeLeft = $('#countdown').text();
    
    var countCertas = 0;
    $("input:checked").each(function(index)
    {
        if($(this).val() == 'certo')
            countCertas++;
    });

    var points = timeLeft*countCertas;

    $('#modal-feedback-message').text("Acertaste em "+countCertas+" de "+$('.question-group').length+" perguntas!");
    
    $('#points').text(points);
    sessionStorage.userpoints = points;
}