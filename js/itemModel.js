define(function(require) {
	//defined files needed to run this file
	//set variables for files
	var Backbone = require('backbone');

	//object extension of backbone
	var ItemModel = Backbone.Model.extend({

		//default attribute set on model
		//models are set to false by default
		defaults: {
			"_isComplete":false
		},

		initialize: function() {
			this.save({silent: true});
			this.listenTo(this, "destroy", this.sync);
		}
	});

	return ItemModel;

});