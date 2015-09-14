App.Views.homeView = new (Backbone.View.extend({
	
	model: App.Models.home,

	el: $(document.body),

	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	events: {
		'click a#logout': 'logOut'
	},
	logOut: function () {
        Parse.User.logOut();
        App.Models.home.set({currentUser: Parse.User.current() !== null });
    },
	render: function(){
		var template = Handlebars.templates['home.hdb'];
		this.$el.html(template(this.model.toJSON()));
    },
	remove: function() {
		this.$el.remove();
	}
}));