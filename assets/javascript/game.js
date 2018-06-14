    var time = 120;
    var intervalId;
    var gameStart = false;
    var answer1 = "";
    var answer2 = "";
    var answer3 = "";
    var answer4 = "";
    
    document.getElementById("counter").style.visibility = "hidden";
    
    $("#start-button").on('click', timerRun);
            
    gameStart = true;

    function timerRun() {
        interval = setInterval(countdown, 1000);
    }
        
    function countdown() {
        time--;
        document.getElementById("counter").style.visibility = "visible";
        document.getElementById("start-button").style.visibility = "hidden";
        document.getElementById("time-text").style.visibility = "hidden";
        $("#counter").html("<p>" + "You have " + "<strong>" + time + "</strong>" + " seconds remaining!" + "</p>");
        if (time === 0) {
            countdownStop();
            alert("Your time is up! Refresh page to play again.")
            document.getElementById("counter").style.visibility = "hidden";
            document.getElementById("start-button").style.visibility = "visible";
            document.getElementById("time-text").style.visibility = "visible";
            $("input[type=radio]").prop('disabled', true);
        }
    }

    $(':radio[name="radio1"]').change(function () {
        answer1 = $(this).filter(':checked').val();
        console.log("A1" + answer1);
        if (answer1 === "Sprague") {
            $("#wrong-correct1").html("<h1>" + "Correct!" + "</h1>");
            $("#q1-container").hide();
            $("#i1-container").show();
        } else {
            $("#wrong-correct1").html("<h1>" + "Wrong! The answer is Sprague." + "</h1>");
            $("#q1-container").hide();
            $("#i1-container").show();
        }
    })
    console.log(answer1);

    $(':radio[name="radio2"]').change(function() {
        answer2 = $(this).filter(':checked').val();
        console.log("A2" + answer2);
        if (answer2 === "Byrd Theater") {
            $("#wrong-correct2").html("<h1>" + "Correct!" + "</h1>");
            $("#q2-container").hide();
            $("#i2-container").show();
        } else {
            $("#wrong-correct2").html("<h1>" + "Wrong! The answer is Byrd Theater." + "</h1>");
            $("#q2-container").hide();
            $("#i2-container").show();
        }
    })
    console.log(answer2);

    $(':radio[name="radio3"]').change(function() {
        answer3 = $(this).filter(':checked').val();
        console.log("A3" + answer3);
        if (answer3 === "Oregon Hill") {
            $("#wrong-correct3").html("<h1>" + "Correct!" + "</h1>");
            $("#q3-container").hide();
            $("#i3-container").show();
        } else {
            $("#wrong-correct3").html("<h1>" + "Wrong! The answer is Oregon Hill." + "</h1>");
            $("#q3-container").hide();
            $("#i3-container").show();
        }
    })
    console.log(answer3);

    $(':radio[name="radio4"]').change(function() {
        answer4 = $(this).filter(':checked').val();
        console.log("A4" + answer4);
        if (answer4 === "Monument Avenue") {
            $("#wrong-correct4").html("<h1>" + "Correct!" + "</h1>");
            $("#q4-container").hide();
            $("#i4-container").show();
        } else {
            $("#wrong-correct4").html("<h1>" + "Wrong! The answer is Monument Avenue." + "</h1>");
            $("#q4-container").hide();
            $("#i4-container").show();
        }
    })
    console.log(answer4);

    function countdownStop() {
        clearInterval(intervalId);
        time = 120;
    }
    timerrun();
    

    

    
    


             
    
   