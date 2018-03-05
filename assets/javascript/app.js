$(document).ready(function(){

// Starts the game from the beginning 

$("#questions").hide();
$("#scoreboard").hide();


// timer

var secondsLeft = 60;

var intervalId;

function countdown() {

    secondsLeft--;
    console.log(secondsLeft);

    $("#timer").html(secondsLeft);


    if (secondsLeft === 0) {

        clearInterval(intervalId) 

        $("#startWindow").hide();
        $("#questions").hide();
        $("#scoreboard").show();
        game.done();

    }

}

// starts the game by clicking the button

$("#startButton").on("click", function() {

    $("#startWindow").hide();
    $("#questions").show();
    $("#scoreboard").hide();
    intervalId = setInterval(countdown, 1000);
    for (var i=0; i<questions.length; i++) {
        $("#questions").append("<h2>"+questions[i].question+"</h2>");
        for (var j=0; j<questions[i].answers.length; j++) {
            $("#questions").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
        }
    }

});

// done button 

$("#doneButton").on("click", function() {
        clearInterval(intervalId) 
        $("#startWindow").hide();
        $("#questions").hide();
        $("#scoreboard").show();
        game.done();
});



//questions 

var questions = [{
    question: "The Goblin King is played by what famous musician?",
    answers: ["Mick Jagger ", "Michael Jackson", "David Bowie", "Freddie Mercury"],
    correctAnswer: "David Bowie"
}, 
{
    question: "The concept art for Labyrinth was made by which popular fantasy artist?",
    answers: ["Brian Froud", "Maurice Mitchell", "Alexis Smith", "Jack Allison"],
    correctAnswer: "Brian Froud"
},
{
    question: "How many hours does Sarah have to complete the Labyrinth?",
    answers: ["10", "13", "24", "As long as she wants"],
    correctAnswer: "13"
},
{
    question: "What is the name of Sarah's dog?",
    answers: ["Ambrosious", "Merlin", "Hoggle", "Sir Didymus"],
    correctAnswer: "Merlin"
},
{
    question: "Who directed Labyrinth?",
    answers: ["Steven Spielberg", "Martin Scorcese", "David Bowie", "Jim Henson"],
    correctAnswer: "Jim Henson"
},
{
    question: "The upside-down room was inspired by the art from what famous artist?",
    answers: ["MC Escher", "Andy Warhol", "Claude Monet", "Jasper Johns"],
    correctAnswer: "MC Escher"
},
{
    question: "What animal represents Jareth, the Goblin King?",
    answers: ["Black Crow", "Snowy Owl", "White Mouse", "Shaggy Dog"],
    correctAnswer: "Snowy Owl"
},
{
    question: "What year was Labyrinth made?",
    answers: ["1972", "1980", "1986", "1993"],
    correctAnswer: "1986"
}]

//game 

var game = {
    correct: 0, 
    incorrect: 0,
    done: function() {

        $.each($("input[name='question-0']:checked"), function() {
            if($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }    
        });
        $.each($("input[name='question-1']:checked"), function() {
            if($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }    
        });
        $.each($("input[name='question-2']:checked"), function() {
            if($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }    
        });
        $.each($("input[name='question-3']:checked"), function() {
            if($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }    
        });
        $.each($("input[name='question-4']:checked"), function() {
            if($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }    
        });
        $.each($("input[name='question-5']:checked"), function() {
            if($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }    
        });
        $.each($("input[name='question-6']:checked"), function() {
            if($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }    
        });
        $.each($("input[name='question-7']:checked"), function() {
            if($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }    
        });

        $("#scoreboard").append("<h3>" + "Correct Answers: " + game.correct + "</h3");
        $("#scoreboard").append("<h3>" + "Incorrect Answers: " + game.incorrect + "</h3>");
    }

}




// end

}); 