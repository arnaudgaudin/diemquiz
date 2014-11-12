// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

// Référence pour quiz test
//http://www.apfc-asso.fr/quiz/connaissez-vous-bien-les-metiers-de-l-expertise-comptable.html

var quizJSON = {
	"info": {
		"name":    "Quiz Expert Comptables",
		"main":    "<p>Vous pensez avoir de solides connaissances juridiques ? Votre expert comptable vous propose de tester vos connaissances.</p>",
		"results": "<h5>En savoir plus</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
		"level1":  "Maître Yoda",
		"level2":  "Maître Jedi",
		"level3":  "Apprenti",
		"level4":  "Jeune padawan",
		"level5":  "Retourne à l'école, petit padawan..." // no comma here
	},
	"questions": [
		{
			"q": "Le métier d’expert-comptable, comme celui de médecin, est une profession réglementée.",
			"a": [
				{"option": "Vrai", "correct": true},
				{"option": "Faux", "correct": false}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "L’expert-comptable, comme le médecin, exerce seulement en libéral.",
			"a": [
				{"option": "Vrai", "correct": false},
				{"option": "Faux", "correct": true}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "On dénombre en France plus d’experts-comptables hommes que femmes.",
			"a": [
				{"option": "Vrai", "correct": true},
				{"option": "Faux", "correct": false}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "Il faut compter 6 ans d’études pour devenir expert-comptable.",
			"a": [
				{"option": "Vrai", "correct": false},
				{"option": "Faux", "correct": true}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "Pour devenir expert-comptable, on est obligé de passer par un lycée préparant au DCG, Diplôme de Comptabilité et de Gestion.",
			"a": [
				{"option": "Vrai", "correct": false},
				{"option": "Faux", "correct": true}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "La principale mission de l'expert-comptable au-delà de la tenue des comptes est la mission de conseil auprès du chef d’entreprise.",
			"a": [
				{"option": "Vrai", "correct": true},
				{"option": "Faux", "correct": false}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "À la différence de l’expert-comptable, le comptable peut certifier des comptes mais il ne fait pas de conseils.",
			"a": [
				{"option": "Vrai", "correct": false},
				{"option": "Faux", "correct": true}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "Il est obligatoire pour toute société de faire appel à un expert-comptable.",
			"a": [
				{"option": "Vrai", "correct": false},
				{"option": "Faux", "correct": true}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "L’expert-comptable et son client doivent signer un contrat, appelé lettre de mission, qui définit le travail à effectuer.",
			"a": [
				{"option": "Vrai", "correct": true},
				{"option": "Faux", "correct": false}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "Un collaborateur en cabinet ne gère pas directement des clients.",
			"a": [
				{"option": "Vrai", "correct": false},
				{"option": "Faux", "correct": true}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "Les mathématiques sont la matière primordiale pour devenir expert-comptable.",
			"a": [
				{"option": "Vrai", "correct": false},
				{"option": "Faux", "correct": true}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "Une des qualités requises pour être expert-comptable est le relationnel ?",
			"a": [
				{"option": "Vrai", "correct": true},
				{"option": "Faux", "correct": false}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "A la différence de l’expert-comptable, le commissaire aux comptes peut certifier les comptes de grands groupes, comme les sociétés anonymes (SA) ou les Sociétés par actions simplifiées (SAS).",
			"a": [
				{"option": "Vrai", "correct": false},
				{"option": "Faux", "correct": true}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		},
		{
			"q": "L’expert-comptable passe en moyenne plus de temps en déplacement chez ses clients qu’à son bureau.",
			"a": [
				{"option": "Vrai", "correct": true},
				{"option": "Faux", "correct": false}
			],
			"correct": "<p><span>Bonne réponse !</span></p>",
			"incorrect": "<p><span>Mauvaise réponse !</span></p>"
		}
	]
};
