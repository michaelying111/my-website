
function showRecipe() {
	// confirm dialog for user check questionnaire
	// https://www.w3schools.com/js/js_popup.asp
	let flag;
    if (confirm("Please confirm that you have carefully reviewed and accurately filled out the questionnaire.")) {
      flag = true;
    } else {
      flag = false;
    }
	// use JavaScript to add dynamic content to pages.
	// https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_inner_html
	if (flag){
		$("#result").html("Based on the survey results, I believe you would like Beijing roast duck.");

	}
}

    function answer_click(question_id) {
        // When the last question is answered, display the submit button
        if (question_id == 5) {
            $("#submit-button").css('visibility', 'visible');
        } else {
            // When the answer is complete, display the next question
            let next_question_div_id = "#question_" + (question_id + 1);
            console.log(next_question_div_id);
            $(next_question_div_id).removeAttr("hidden");
            fadeIn(next_question_div_id, 1000);
        }
    }

    function fadeIn(nam, speed) {
        speed /= 10;
        var $element = $(nam);
        if ($element.css("opacity") !== "1") {
            var num = 0;
            // Gradually change element transparency using setInterval
            var st = setInterval(function() {
                num++;
                $element.css("opacity", num / 10);
                if (num >= 10) {
                    clearInterval(st);
                }
            }, speed);
        }
    }