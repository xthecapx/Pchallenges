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
       }
    },
    start: function() {
    	this.Router = new App.Router();
    	Backbone.history.start({pushState: true, root: 'challenge'});
    },
    template: _.template('<h1>This is my Challenge, Cristian Marquez!</h1>'),
    render: function () {
    	this.$el.html(this.template());
    }
}))({el: document.body});

$(function() {
	App.render(); 
	App.start();
});