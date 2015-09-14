var App = new (Backbone.View.extend({
    Models : {},
    Views: {},
    Collections: {},
    Helpers: {},
    events: {
       'click a': function(e) {
        	e.preventDefault();
        	console.log('Navegando a ' + e.target.pathname);
        	Backbone.history.navigate(e.target.pathname, true);
       },
       'click a#logOut': 'logOut'
    },
    start: function() {      
    	//Initialize the router
        this.Router = new App.Router();
    	Backbone.history.start({pushState: true , root: 'challenge'});
        
        //Initiatilize the Parse API
        Parse.initialize("O6GZ0PV5nygFuaEHk25h6lu19PiSKKWE4XfRyJVM", "APhJ03XQs4wek1T8TlWiZm4B4ybcBrcQ44fNv7SE");
        
        //Setting the current user in ther Model
        App.Models.home.set({currentUser: Parse.User.current() !== null });

    },
    logOut: function () {
        Parse.User.logOut();
        App.Models.home.set({currentUser: Parse.User.current() !== null });
    }
}))({el: document.body});

//Starting the App
$(function() {
	App.start();
});