App.Models.home = new (Backbone.Model.extend({
	defaults: function() {
		return {
			name: '',
			comments: '',
			currentUser: ''
		};	
	}
}));