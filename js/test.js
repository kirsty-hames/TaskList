// empty array
var emptyArray = [];

// empty object
var emptyObject = {};

var arrayItems = ["arrayItem1", "arrayItem2"];

var myObjects = {
	title: "My title",
	body: "My body text",
	_isComplete: true
};

var MyView = Backbone.View.extend({
	initialize: function() {

	},

	render: function() {

	}
});

function add(number1, number2) {
	console.log(number1 + number2);
}

function sub(number1, number2) {
	console.log(number1 - number2);
}

function multiply(number1, number2) {
	console.log(number1 * number2);
}

function divide(number1, number2) {
	console.log(number1 / number2);
}

function remainder(number1, number2) {
	console.log(number1 % number2);
}