define(function(require) {

	var Backbone = require('backbone');

	var ItemModel = Backbone.Model.extend({

		initialize: function() {
			console.log('item model init');
		},

		defaults: {
			"_isComplete":false
		}
	});

	return ItemModel;

});