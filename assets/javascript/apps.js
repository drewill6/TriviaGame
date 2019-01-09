//Click Get Lean to start
//The timer will countdown from 45 seconds
//The player will give one answer per eight questions

var counter = 0;
var timeleft = 45;
var rightAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

$(document).ready(function () {
    ResetGame();

    //click to start event...
    $("#start-button").on('click', function (e) {
        $(this).parent().hide();
        $('.container-fluid').show();
        counter(45);
        questionDisplay();
    }

});

function clock() {
    time = setInterval(fortyFive, 1000);

    function fortyFive() {
        if (counter === 0) {
            clearInterval(timeLeft);
            questionTimeout();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }

}

$("document").on("click", '.rightAnswer', function (e) {

    function rightAnswers() {
        console.log("rightAnswer Function()");
        rightAnswer++;
        if (selectedAnswer === rightAnswer) {
            clearInterval(time);
            rightAnswer();
        } 
        else {
            clearInterval(time);
            wrongAnswer();
        }
    }

    $("document").on("click", '.wrongAnswer', function (e) {

        function wrongAnswers() {
            console.log("wrongAnswer Function()");
            wrongAnswer++;
            if (selectedAnswer === rightAnswer) {
                clearInterval(time);
                rightAnswer();
            } 
            else {
                clearInterval(time);
                wrongAnswer();
            }
        }

        function endGame() {
            console.log("endGame Function()");
            if (selectedAnswer === rightAnswer) {
                clearInterval(time);
                rightAnswer();
            } 
            else {
                clearInterval(time);
                wrongAnswer();
            }
        }

        // on click the reset button
        $("#reset").on('click', function (e) {
            ResetGame();

            function ResetGame() {
                var counter = 0;
                var timeleft = 45;
                var rightAnswers = 0;
                var wrongAnswers = 0;
                var unAnswered = 0;

            }


            var questionsArray = [
                "What is the best exercise for total leg development?",
                "what is the one body part that every man on the planet consistently trains on Monday?",
                "What is the best exercise for overall back development?",
                "What is considered our bodies muscle building block?",
                "How many times a week should you workout a specific body part?",
                "Why should we do some form of cardio daily?",
                "What is the best form of cardio for building and maintaining muscle?",
                "How many meals should a person eat per day to increase his/her metabolism?",
            ];
            var answersArray = [
                ["Running", "Squats", "Lunges", "Burpees"],
                ["Biceps", "Chest", "Calves", "Eyes"],
                ["Pullups", "Curls", "Pushups", "Dips"],
                ["Amino Acids", "Creatine", "Fat", "Carbohydrates"],
                ["5", "2", "4", "1"],
                ["Build Muscle", "Lose Weight", "Healthy Heart", "Burn Fat"],
                ["Jumping Jacks", "Sprints", "Sit Ups", "Planks"],
                ["6 Meals", "1 Meal", "4 Meals", "2 Meals"]

            ];
            var correctArray = [
                "C. Lunges",
                "B. Chest",
                "A. Pullups",
                "A. Amino Acids",
                "B. 2",
                "C. Healthy Heart",
                "B. Sprints",
                "C. 4 Meals",

            ];

            var counter = 0;
            var timeleft = 45;
            var rightAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

        }  