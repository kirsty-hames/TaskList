//files needed to run this file
require([
	'handlebars',
	'templates',
	'js/hub',
	'js/itemView',
	'js/itemCollection',
	'js/addItemView'
], function (Handlebars, templates, Hub, ItemView, ItemCollection, AddItemView) {

	//data stored as items
	/*var items = [
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
	];*/

	//create a collection to hold my models and create new ItemModels
	var Items = new ItemCollection();

	//new view created for when items 
	new AddItemView();

	//renderCollection method created
	//for each item in the collection create a new ItemView 
	function renderCollection() {
		Items.each(function(item) {
			new ItemView ({model: item})
		});
	}

	Items.fetch({
		success: function() {
			renderCollection();
		}
	})
	
    
    Hub.on('addItem', function(inputValue) {
    	Items.push({"title": inputValue});
    	Hub.trigger('remove');
    	renderCollection();
    })
});