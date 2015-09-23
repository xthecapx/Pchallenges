App.Controllers.homeController = {
 
    bigTime: 1499, // 25 seconds
 
    rest: true,
 
    mins: 25,
    secs: 0,
    countdownID: '',
 
    counter: function() {
 
        var self = this;
 
        this.mins = Math.floor(this.bigTime / 60);
        this.secs = this.bigTime - this.mins * 60;
 
        if (this.bigTime === 0) {
            if(self.rest) {
                self.spawnNotification('/images/icon.png','Time to rest', 'Have a good time!');
                self.restTimer();
                self.rest = false;
            } else {
                self.spawnNotification('/images/icon.png','Back to work', 'Lets do something amazing!');
                self.stopTimer();
                self.rest = true;
                self.resetTimer();
            }
        } else {
            this.bigTime = this.bigTime - 1;
 
            //Update timers in the Home View
            App.Models.home.set({
                mins: App.Controllers.homeController.mins,
                secs: App.Controllers.homeController.secs,
                bigTime: App.Controllers.homeController.bigTime});
        }
    },
 
    startTimer: function() {
        var self = this;
        clearInterval(self.countdownID);
        this.countdownID = setInterval( function() { self.counter();}, 500);
    },
 
    stopTimer: function() {
        clearInterval(this.countdownID);
    },
 
    restTimer: function() {
        this.bigTime = 290;
        App.Models.home.set({
            mins: 5,
            secs: 0,
            bigTime: App.Controllers.homeController.bigTime});
    },
 
    resetTimer: function() {
        this.bigTime = 1499;
        App.Models.home.set({
            mins: 25,
            secs: 0,
            bigTime: App.Controllers.homeController.bigTime});
    },
    spawnNotification: function (theIcon, theBody,theTitle) {
        var options = {
            title: theTitle,
            body: theBody,
            icon: theIcon
        }
        var n = new window.Notification(theTitle,options);
        setTimeout(n.close.bind(n), 4000);
    },
    checkPermissions: function() {
        if (window.Notification.permission === 'default' || window.Notification.permission === 'denied') {
            window.Notification.requestPermission(function() {});
        }  
    }
};