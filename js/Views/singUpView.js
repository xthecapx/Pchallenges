App.Views.singUpView = new (Backbone.View.extend({
	
	model: new App.Models.singUp(),

	el: $(document.body),

	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	
	render: function(){
		var template = Handlebars.templates['singUp'];
		this.$el.html(template(this.model.toJSON()));
    },

    events: {
    	'submit #singUp': 'save'
    },
	
	remove: function() {
		this.$el.remove();
	},

	save: function(e) {
		e.preventDefault();
    	var userEmail = this.$('input[name=userEmail]').val();
    	var userPassword = this.$('input[name=userPassword]').val();

    	console.log(userPassword + ' ' + userEmail);
    	
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
		    currentUser = true;
		    Backbone.History.navigate('/', true);
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	}

}));