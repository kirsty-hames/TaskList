define(function(require) {

	var Backbone = require('backbone');

	var AddItemView = Backbone.View.extend({

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
			this.$el.html(template()).appendTo('.add-task-button');

			return this;
		}

	});

	return AddItemView;

});