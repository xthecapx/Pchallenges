var App = new (Backbone.View.extend({
    Models : {},
    Views: {},
    Collections: {},
    Controllers: {},
    events: {
        'click button.stop': 'stopTimer',
        'click button.timer': 'startTimer',
        'click button.reset': 'resetTimer',
        'click a.logOut': 'logOut',
        'click a.home': function() {Backbone.history.navigate('', true);},
        'click a.login': function() {Backbone.history.navigate('login', true);},
        'click a.singUp': function() {Backbone.history.navigate('singUp', true);}
 
    },
    start: function() {
        //Initialize the router
        Backbone.history.start({pushState: true , root: window.location.pathname });
 
        this.Router = new App.Router();

        //Check notification permissions
        this.Controllers.homeController.checkPermissions();
 
        //Initiatilize the Parse API
        Parse.initialize("O6GZ0PV5nygFuaEHk25h6lu19PiSKKWE4XfRyJVM", "APhJ03XQs4wek1T8TlWiZm4B4ybcBrcQ44fNv7SE");
 
        //Setting the current user in ther Model
        this.Models.home.set({
            currentUser: Parse.User.current() !== null,
            mins: this.Controllers.homeController.mins,
            secs: this.Controllers.homeController.secs });
 
    },
    render: function(){
        this.Views.homeView.render();
    },
    logOut: function () {
        Parse.User.logOut();
        this.Models.home.set({currentUser: Parse.User.current() !== null });
    },
    startTimer: function() {
        this.Controllers.homeController.startTimer();
    },
    stopTimer: function() {
        this.Controllers.homeController.stopTimer();
    },
    resetTimer: function() {
        this.Controllers.homeController.resetTimer();
    }
}))({el: document.body});
 
//Starting the App
$(function() {
    App.start();
});