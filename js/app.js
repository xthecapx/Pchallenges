var App = new (Backbone.View.extend({
    Models : {},
    Views: {},
    Collections: {},
    Helpers: {},
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
 
        if (window.Notification.permission === 'default' || window.Notification.permission === 'denied') {
        // Good to go, you can create a notification.
            window.Notification.requestPermission(function() {});
        }
 
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