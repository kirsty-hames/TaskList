define(function(require) {
	//defined files needed to run this file
	//set variables for files
	var Backbone = require('backbone');

	var ItemModel = require('js/itemModel');

	var LocalStorage = require('localStorage');

	//object extension of backbone
	var ItemCollection = Backbone.Collection.extend({

		//model attribute of ItemModel is set to collection
		model: ItemModel,

		localStorage: new Backbone.LocalStorage("tasks")

	});

	return ItemCollection;

});