define(function(require) {
	//defined files needed to run this file
	//set variables for files
	var Backbone = require('backbone');
	var ItemModel = require('js/itemModel');

	var ItemCollection = Backbone.Collection.extend({

		model: ItemModel,
		//console.log initialize to see if view returns ItemCollection
		initialize: function() {
			console.log('item collection init', this);
			this.listenTo(this, 'destroy', this.modelWasDestoryed)
		},

		modelWasDestoryed: function() {
			console.log(this);
		}
	});

	return ItemCollection;

});