App.Views.homeView = new (Backbone.View.extend({
	
	model: App.Models.home,

	el: $('section.content'),

	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	render: function(){
		var template = Handlebars.templates['home.hdb'];
		var menu = Handlebars.templates['menu.hdb'];
		this.$el.html(template(this.model.toJSON()));
		$('nav.menu').html(menu(this.model.toJSON()));
    },
	remove: function() {
		this.$el.remove();
	}
}));