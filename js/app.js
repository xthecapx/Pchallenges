var App = new (Backbone.View.extend({
    Models : {},
    Views: {},
    Collections: {},
    Controllers: {},
    events: {
        'click button#stop': 'stopTimer',
        'click button#timer': 'startTimer',
        'click button#reset': 'resetTimer',
        'click a#logOut': 'logOut',
        'click a#home': function() {Backbone.history.navigate('', true);},
        'click a#login': function() {Backbone.history.navigate('login', true);},
        'click a#singUp': function() {Backbone.history.navigate('singUp', true);}
 
    },
    start: function() {
        //Initialize the router
        Backbone.history.start({pushState: true , root: window.location.pathname });
 
        this.Router = new App.Router();

        //Check notification permissions
        App.Controllers.homeController.checkPermissions();
 
        //Initiatilize the Parse API
        Parse.initialize("O6GZ0PV5nygFuaEHk25h6lu19PiSKKWE4XfRyJVM", "APhJ03XQs4wek1T8TlWiZm4B4ybcBrcQ44fNv7SE");
 
        //Setting the current user in ther Model
        App.Models.home.set({
            currentUser: Parse.User.current() !== null,
            mins: App.Controllers.homeController.mins,
            secs: App.Controllers.homeController.secs });
 
    },
    render: function(){
        App.Views.homeView.render();
    },
    logOut: function () {
        Parse.User.logOut();
        App.Models.home.set({currentUser: Parse.User.current() !== null });
    },
    startTimer: function () {
        App.Controllers.homeController.startTimer();
    },
    stopTimer: function() {
        App.Controllers.homeController.stopTimer();
    },
    resetTimer: function() {
        App.Controllers.homeController.resetTimer();
    }
}))({el: document.body});
 
//Starting the App
$(function() {
    App.start();
});