var App = new (Backbone.View.extend({
    Models : {},
    Views: {},
    Collections: {},
    Helpers: {},
    events: {
        'click a#logOut': 'logOut',
        'click a#timer': 'startTimer',
        'click a#stop': 'stopTimer',
        'click a#reset': 'resetTimer',
        'click a': function(e) {
        	e.preventDefault();
        	console.log('Navegando a ' + e.target.pathname);
        	Backbone.history.navigate(e.target.pathname, true);
       },

    },
    start: function() {      
    	//Initialize the router
        this.Router = new App.Router();
    	Backbone.history.start({pushState: true , root: 'challenge'});
        
        //Initiatilize the Parse API
        Parse.initialize("O6GZ0PV5nygFuaEHk25h6lu19PiSKKWE4XfRyJVM", "APhJ03XQs4wek1T8TlWiZm4B4ybcBrcQ44fNv7SE");
        
        //Setting the current user in ther Model
        App.Models.home.set({
            currentUser: Parse.User.current() !== null, 
            mins: App.Helpers.setTimer.mins, 
            secs: App.Helpers.setTimer.secs });

    },
    render: function(){
        App.Views.homeView.render();
    },
    logOut: function () {
        Parse.User.logOut();
        App.Models.home.set({currentUser: Parse.User.current() !== null });
    },
    startTimer: function () {
        App.Helpers.setTimer.startTimer();
    },
    stopTimer: function() {
        App.Helpers.setTimer.stopTimer();
    },
    resetTimer: function() {
        App.Helpers.setTimer.resetTimer();
    }
}))({el: document.body});

//Starting the App
$(function() {
	App.start();
});