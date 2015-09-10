App.Views.patientView = new (Backbone.View.extend({
	
	model: new App.Models.patient(),

	el: $(document.body),

	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	
	render: function(){
		var template = Handlebars.templates['home'];
		this.$el.html(template(this.model.toJSON()));
    },
	
	remove: function() {
		this.$el.remove();
	}
}));