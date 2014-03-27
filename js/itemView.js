define(function (require) {

	var Backbone = require ('backbone');

	var ItemView = Backbone.View.extend({

		className: "task-item",

		events: {
			"click .task-item-delete": "removeItem",
			"change .task-item-checkbox": "checkItem"
		},

		initialize: function() {
			console.log('item view init');
			this.listenTo(this.model, 'change:_isComplete', this.modelUpdated)
			this.render();
		},

		render: function() {
			console.log('view should render model data');
			//get model data and store it in data
			var data = this.model.toJSON();

			//get handlebars template and store it in template
			var template = Handlebars.templates['item'];

			//this.$el is the current ItemView element
			//put the template with data into element
			this.$el.html(template(data)).appendTo('.task-items');

			return this;

		},

		//removeItem event created
		removeItem: function() {
			this.model.destroy();
			this.remove();
		},

		//checkItem event created
		checkItem: function() {
			if(this.model.get('_isComplete')) {
				this.model.set('_isComplete', false);
				this.$el.removeClass('task-item-checkbox-completed');
				console.log('if statement true so class removed');

			} else {
				this.model.set('_isComplete', true);
				this.$el.addClass('task-item-checkbox-completed');
				console.log('if statement false so class added')
			}
		},

		modelUpdated: function() {
			console.log('model updated to complete', this.model.get('_isComplete'));
		}

	});

	return ItemView;

});
//toggle checkItem function
//this.$el.toggleClass('task-item-checkbox-completed');
			//console.log('task completed');