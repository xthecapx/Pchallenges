App.Views.loginView = new (Backbone.View.extend({
	
	model: new App.Models.login(),

	el: $(document.body),

	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	
	render: function(){
		var template = Handlebars.templates['login'];
		this.$el.html(template(this.model.toJSON()));
    },

    events: {
    	'submit #login': 'login'
    },
	
	remove: function() {
		this.$el.remove();
	},

	login: function(e) {
		e.preventDefault();
    	var userEmail = this.$('input[name=userEmail]').val();
    	var userPassword = this.$('input[name=userPassword]').val();

    	console.log(userPassword + ' ' + userEmail);

    	Parse.User.logIn(userEmail, userPassword, {
			success: function(user) {
			// Do stuff after successful login.
			currentUser = true;
			Backbone.history.navigate('/', true);
			},
			error: function(user, error) {
	   		// The login failed. Check error to see why.
	   		alert("Error: " + error.code + " " + error.message);
			}
		});
	}

}));