define(function (require) {
	//defined files needed to run this file
	//set variables for files
	var Backbone = require ('backbone');

	var Hub = require('js/hub');
	//object extension of backbone
	var ItemView = Backbone.View.extend({
		//className attribute of task-item is set to view
		className: "task-item",

		//event attributes set to view
		events: {
			"click .task-item-delete": "removeItem",
			"change .task-item-checkbox": "checkItem"
		},

		initialize: function() {
			//view listens for when model is updated
			//view listens to hub for when model is removed
			//call render method
			this.listenTo(this.model, 'change:_isComplete', this.modelUpdated);
			this.listenTo(Hub, 'remove', this.remove);
			this.render();
		},

		render: function() {
			//get model data and store it in data
			var data = this.model.toJSON();

			//get handlebars template and store it in template
			var template = Handlebars.templates['item'];

			//this element is the current view element
			//put the template with data into this view element
			this.$el.html(template(data)).appendTo('.task-items');

			return this;

		},

		//removeItem method created
		removeItem: function() {
			//this model is destroyed and removed from the collection 
			this.model.destroy();
			this.remove();
		},

		//checkItem method created
		checkItem: function() {
			//get this models attribute
			//if this models attribute value is false
			//remove 'task-item-checkbox-completed' class from this views object with a class of 'task-item-inner'  
			if(this.model.get('_isComplete')) {
				this.model.set('_isComplete', false);
				this.$('.task-item-inner').removeClass('task-item-checkbox-completed');

			} else {
				//else if this models attribute value is true
				//add class 'task-item-checkbox-completed' to this views object with a class of 'task-item-inner' 
				this.model.set('_isComplete', true);
				this.$('.task-item-inner').addClass('task-item-checkbox-completed');
			}
		},

	});

	return ItemView;

});
