//files needed to run this file
require([
	'handlebars',
	'templates',
	'js/hub',
	'js/itemView',
	'js/itemCollection',
	'js/addItemView',
	'js/clearItemsView'
], function (Handlebars, templates, Hub, ItemView, ItemCollection, AddItemView, ClearItemsView) {

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
	//new view created for when completed tasks are removed
	new ClearItemsView();

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

    Hub.on('clearCompletedItems', function() {
    	var completedItems = Items.where({
    		"_isComplete": true
    	});

    	console.log(completedItems);
    	_.each(completedItems, function(completedModel) {
    		completedModel.destroy();
    	})

    	Hub.trigger('remove');

    	renderCollection();
    });
    	
    function setupTimer() {
     	setTimeout(function(){
	    	var answer = confirm("Have you checked your to do list? Click OK if you wish to continue your alert");
	    	if (answer) {
	    		console.log('clicked ok');
	    		setupTimer();
	    	}
	    }, 3000/* * 60 * 60*/);
    };

     //setupTimer();

});