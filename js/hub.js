define(function(require) {

	var Backbone = require('backbone');

	var Hub = {};

	_.extend(Hub, Backbone.Events);

	return Hub;

});