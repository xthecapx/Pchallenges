//Setting the Helpers
//Login Parse.com Helper
App.Helpers.loginApp = function(e, context) {
    e.preventDefault();
    var userEmail = context.$('input[name=userEmail]').val();
    var userPassword = context.$('input[name=userPassword]').val();
 
    Parse.User.logIn(userEmail, userPassword, {
        success: function(user) {
            // Do stuff after successful login.
            console.log(user);
            App.Models.home.set({currentUser: Parse.User.current() !== null });
            Backbone.history.navigate('/', true);
        },
        error: function(user, error) {
            // The login failed. Check error to see why.
            $(".error").html("Invalid username or password. Please try again.").show();
        }
    });
};
 
App.Helpers.signUp = function(e, context) { 
    e.preventDefault();
    var userEmail = context.$('input[name=userEmail]').val();
    var userPassword = context.$('input[name=userPassword]').val();
     
    var user = new Parse.User();
    user.set("username", userEmail);
    user.set("password", userPassword);
    user.set("email", userEmail);
 
    // other fields can be set just like with Parse.Object
    //user.set("phone", "415-392-0202");
 
    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
        alert('new user created');
        App.Models.home.set({currentUser: Parse.User.current() !== null });
        Backbone.history.navigate('/', true);
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
};
 
App.Helpers.setTimer = {
 
    bigTime: 1499, // 25 seconds
 
    rest: true,
 
    mins: 25,
    secs: 0,
    countdownID: '',
 
    counter: function() {
 
        var self = this;
 
        this.mins = Math.floor(this.bigTime / 60);
        this.secs = this.bigTime - this.mins * 60;
 
        if (this.bigTime == 0) {
            if(self.rest) {
                console.log('cuenta corta');
                self.spawnNotification('El titulo', 'Tiempo de descanzo!');
                self.restTimer();
                self.rest = false;
            } else {
                console.log('Se acabo la cuenta');
                self.spawnNotification('El titulo', 'A trabajar!');
                self.stopTimer();
                self.rest = true;
                self.resetTimer();
            }
        } else {
            this.bigTime = this.bigTime - 1;
 
            //Update timers in the Home View
            App.Models.home.set({
                mins: App.Helpers.setTimer.mins,
                secs: App.Helpers.setTimer.secs,
                bigTime: App.Helpers.setTimer.bigTime});
        }
    },
 
    startTimer: function() {
        var self = this;
        clearInterval(self.countdownID);
        this.countdownID = setInterval( function() { self.counter();}, 50);
    },
 
    stopTimer: function() {
        clearInterval(this.countdownID);
    },
 
    restTimer: function() {
        this.bigTime = 290;
        App.Models.home.set({
            mins: 5,
            secs: 0,
            bigTime: App.Helpers.setTimer.bigTime});
    },
 
    resetTimer: function() {
        this.bigTime = 1499;
        App.Models.home.set({
            mins: 25,
            secs: 0,
            bigTime: App.Helpers.setTimer.bigTime});
    },
    spawnNotification: function (theBody,theTitle) {
        var options = {
            title: theTitle,
            body: theBody,
        }
        var n = new window.Notification(theTitle,options);
        setTimeout(n.close.bind(n), 4000);
    }
};