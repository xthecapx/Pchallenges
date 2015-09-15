App.Views.singUpView = new (Backbone.View.extend({
	
	model: new App.Models.singUp(),

	el: $('section.content'),

	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	
	render: function(){
		var template = Handlebars.templates['singUp.hdb'];
		this.$el.html(template(this.model.toJSON()));
    },

    events: {
    	'submit form.singUp': 'save'
    },
	
	remove: function() {
		this.$el.remove();
	},

	save: function(e) {
		App.Controllers.signUpController(e, this);
	}

}));