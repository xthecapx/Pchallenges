App.Router = Backbone.Router.extend({
	routes: {
		'(/)': 'home',
		'singUp': 'singUp',
		'login': 'login',
		'*path': 'notFound'
	},
	home: function () {
		console.log('home');
		App.Views.homeView.render();
	},
	singUp: function() {
		console.log('singUp');
		App.Views.singUpView.render();
	},
	login: function() {
		console.log('Render /login');
		App.Views.loginView.render();
	},
	notFound: function () {
		console.log('not Found');
		alert('not Found');
	},
});