var App = new (Backbone.View.extend({
    Models : {},
    Views: {},
    Collections: {},
    events: {
       'click a': function(e) {
        	e.preventDefault();
        	console.log('click on a');
        	console.log(e);
        	console.log(e.target.pathname);
        	Backbone.history.navigate(e.target.pathname, true);
       },
       'click a#logout': function() {
            console.log('click on logout');
       }
    },
    start: function() {
    	this.Router = new App.Router();
    	Backbone.history.start({pushState: true, root: 'challenge'});
        Parse.initialize("O6GZ0PV5nygFuaEHk25h6lu19PiSKKWE4XfRyJVM", "APhJ03XQs4wek1T8TlWiZm4B4ybcBrcQ44fNv7SE");
        currentUser = Parse.User.current() !== null;
        //Parse.User.logOut();
    },
    template: _.template('<h1>This is my Challenge, Cristian Marquez!</h1>'),
    render: function () {
    	this.$el.html(this.template());
    }
}))({el: document.body});

$(function() {
	App.render(); 
	App.start();
    var currentUser = App.currentUser;
});

Handlebars.registerHelper('if', function(conditional, options) {
  if(conditional) {
    return options.fn(this);
  }
});