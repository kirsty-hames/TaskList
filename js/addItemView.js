define(function(require) {

	var Backbone = require('backbone');

	var Hub = require('js/hub');

	var AddItemView = Backbone.View.extend({

		className: "add-task-button",

		events: {
			"click .add-task-add-button": "addItem",
			"keydown .add-task-button-input-inner": "enterKey"
		},

		initialize: function() {
			console.log('add item view init');
			this.render();
		},

		render: function() {
			console.log('view should render model data');
			//get date from model and store in data
			//var data = this.model.toJSON();

			//get handlebars template and store in template
			var template = Handlebars.templates['addItem'];

			//this.$el is the current AddItemView DOM element
			//put the template with the date into the element
			this.$el.html(template()).appendTo('.add-task-button-holder');

			return this;
		},

		enterKey: function(event) {
			if (event.keyCode === 13) {
				event.preventDefault();
				this.addItem();
			}
		},

		addItem: function() {
			var inputValue = this.$('.add-task-button-input-inner').val();
			console.log(inputValue);
			if (inputValue.length > 0) {
				Hub.trigger('addItem', inputValue);
				this.$('.add-task-button-input-inner').val('');
			}
			
		}

	});

	return AddItemView;

});