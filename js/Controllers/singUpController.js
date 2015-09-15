App.Controllers.signUpController = function(e, context) { 
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