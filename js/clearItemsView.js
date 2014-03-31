define(function(require) {

	var Backbone = require('backbone');

	var Hub = require('js/hub');

	var ClearItemView = Backbone.View.extend({

		className: "clear-completed-tasks-button",

		events: {
			"click .clear-completed-tasks-button": "clearItems"
		},

		initialize: function() {
			console.log('clear items view init');
			this.render();
		},

		render: function() {
			console.log('view should render model data');
			//get date from model and store in data
			//var data = this.model.toJSON();

			//get handlebars template and store in template
			var template = Handlebars.templates['clearItems'];

			//this.$el is the current AddItemView DOM element
			//put the template with the date into the element
			this.$el.html(template()).appendTo('.clear-completed-tasks-button-holder');

			return this;
		},

		clearItems: function() {
			Hub.trigger('clearCompletedItems');
		}

	});

	return ClearItemView;

});