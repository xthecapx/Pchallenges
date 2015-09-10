App.Models.patient = Backbone.Model.extend({
	defaults: function() {
		return {
			name: 'Patient name',
			comments: 'My comments'
		};	
	}
});