this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["addItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"add-task-button-inner\">\n\n	<form class=\"add-task-button-input\">\n		<input type=\"text\" name=\"task\" class=\"add-task-button-input-inner\"/>\n	</form>\n	\n	<button class=\"add-task-add-button icon-pencil icon\">\n		<span class=\"add-task-add-button-inner\"></span>\n	</button> \n\n</div>";
  });

this["Handlebars"]["templates"]["clearItems"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"clear-completed-tasks-button-inner\">\n	<span class=\"icon-cancel-circle\"></span>\n	<span class=\"clear-text\">clear completed tasks</span>\n</div>";
  });

this["Handlebars"]["templates"]["item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function";

function program1(depth0,data) {
  
  
  return "task-item-checkbox-completed";
  }

function program3(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<div class=\"task-item-inner ";
  stack1 = helpers['if'].call(depth0, depth0._isComplete, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n		\n	<form class=\"task-item-complete task-item-button\">\n		<input ";
  stack1 = helpers['if'].call(depth0, depth0._isComplete, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " type=\"checkbox\" name=\"task\" value=\"complete\" class=\"task-item-complete-inner task-item-checkbox\">\n	</form>\n\n	<div class=\"task-item-title\">\n		<div class=\"task-item-title-inner\">\n			";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n	\n	<button class=\"task-item-delete task-item-button\">\n		<span class=\"task-item-delete-inner icon-remove icon\"></span>\n	</button> \n\n</div>\n<hr>\n";
  return buffer;
  });