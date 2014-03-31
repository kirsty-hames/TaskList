require([
	'handlebars',
	'templates',
	'js/itemView',
	'js/itemCollection',
	'js/addItemView'
], function (Handlebars, templates, ItemView, ItemCollection, AddItemView) {

	//data stored as items
	var items = [
		{
			"title": "Item one"
		},
		{
			"title": "Item two"
		},
		{
			"title": "Item three"
		},
		{
			"title": "Item four"
		}
	];
	//create a collection to hold my models and create new ItemModels
	var Items = new ItemCollection(items);

	new AddItemView();

	//for each item in the collection create a new ItemView
	Items.each(function(item) {
		console.log("Going through collection and this is the current model", item);
		new ItemView ({model: item});
	});
    
});