// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz({
    	"perQuestionResponseMessaging"	: false,
    	"disableRanking"				: true,
    	"checkAnswerText"				: "Voir la réponse",
    	"nextQuestionText"				: "Question suivante »",
    	"preventUnansweredText"			: "Vous devez choisir au moins une réponse",
    	"questionCountText"				: "Question %current / %total",
    });
});