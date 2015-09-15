App.Views.loginView = new (Backbone.View.extend({
	
	model: new App.Models.login(),

	el: $('section.content'),

	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	
	render: function(){
		var template = Handlebars.templates['login.hdb'];
		this.$el.html(template(this.model.toJSON()));
		this.$(".error").hide();
    },

    events: {
    	'submit #login': 'login'
    },
	
	remove: function() {
		this.$el.remove();
	},

	login: function(e) {
		App.Helpers.loginApp(e, this);
	}

}));