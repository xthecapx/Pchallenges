App.Router = Backbone.Router.extend({
	routes: {
		'(index)': 'index',
		'help': 'help',
		'home': 'home',
		'*path': 'notFound'
	},
	index: function() {
		console.log('index');
		App.Views.patientView.render();
	},
	help: function() {
		console.log('help');
		alert('help');
	},
	home: function () {
		console.log('home');
		alert('home');
	},
	notFound: function () {
		console.log('not Found');
		alert('not Found');
	}
});