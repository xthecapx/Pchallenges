App.Router = Backbone.Router.extend({
	routes: {
		'(/)': 'home',
		'singUp': 'singUp',
		'login': 'login',
		'*path': 'notFound'
	},
	home: function () {
		App.render();
	},
	singUp: function() {
		App.Views.singUpView.render();
	},
	login: function() {
		App.Views.loginView.render();
	},
	notFound: function () {
		console.log('not Found');
		alert('not Found');
	},
});