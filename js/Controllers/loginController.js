App.Controllers.loginController = function(e, context) {
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