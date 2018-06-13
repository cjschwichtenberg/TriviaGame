$(document).ready(function() {

    var time = 40;
    var intervalId;

    $("#start-button").on('click', timerRun);

    function timerRun() {
        clearInterval(intervalId);
        interval = setInterval(countdown, 1000);
    };

    function countdown() {
        document.getElementById("start-button").style.visibility = "hidden";
        document.getElementById("time-text").style.visibility = "hidden";
        time--;
        $("#counter").html("<p>" + "You have " + time + " seconds to complete this question!" + "</p>");    
    };
    

    $(':radio[name="radio1"]').change(function() {
        answer1 = $(this).filter(':checked').val();
        console.log("A1" + answer1);
        if (answer1 === "Sprague") {
            $("#wrong-correct1").html("<h1>" + "Correct!" + "</h1>");
            $("#q1-container").hide();
            $("#i1-container").show();
        } else {
            $("#wrong-correct1").html("<h1>" + "Wrong! The correct answer is Sprague." + "</h1>");
            $("#q1-container").hide();
            $("#i1-container").show();
        }  
    });

    $(':radio[name="radio2"]').change(function() {
        answer2 = $(this).filter(':checked').val();
        console.log("A2" + answer2);
        if (answer2 === "Byrd Theater") {
            $("#wrong-correct2").html("<h1>" + "Correct!" + "</h1>");
            $("#q2-container").hide();
            $("#i2-container").show();
        } else {
            $("#wrong-correct2").html("<h1>" + "Wrong! The correct answer is Byrd Theater." + "</h1>");
            $("#q2-container").hide();
            $("#i2-container").show();
        }  
    });

    $(':radio[name="radio3"]').change(function() {
        answer3 = $(this).filter(':checked').val();
        console.log("A3" + answer3);
        if (answer3 === "Gambles Hill") {
            $("#wrong-correct3").html("<h1>" + "Correct!" + "</h1>");
            $("#q3-container").hide();
            $("#i3-container").show();
        } else {
            $("#wrong-correct3").html("<h1>" + "Wrong! The correct answer is Gambles Hill." + "</h1>");
            $("#q3-container").hide();
            $("#i3-container").show();
        }  
    });

    $(':radio[name="radio4"]').change(function() {
        answer4 = $(this).filter(':checked').val();
        console.log("A4" + answer4);
        if (answer4 === "Monument Avenue") {
            $("#wrong-correct4").html("<h1>" + "Correct!" + "</h1>");
            $("#q4-container").hide();
            $("#i4-container").show();
        } else {
            $("#wrong-correct4").html("<h1>" + "Wrong! The correct answer is Monument Aveneue." + "</h1>");
            $("#q4-container").hide();
            $("#i4-container").show();
        }
    });
    
    if (time === 0) {
        $("#counter").html("<p>" + "Your time is up!" + "</p>");    
        alert("Your time is up!");
        countdownStop();
    };

    function countdownStop() {
        clearInterval(intervalId);
    };

});