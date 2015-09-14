App.Models.home = new (Backbone.Model.extend({
	defaults: function() {
		return {
			name: '',
			comments: '',
			currentUser: '',
			min: 25,
			sec: 0,
			bigTime: 1499
		};	
	}
}));