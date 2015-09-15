(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home.hdb'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<h1>Let's Get Started</h1>\n<div class=\"clock\">\n	<p>"
    + alias3(((helper = (helper = helpers.mins || (depth0 != null ? depth0.mins : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mins","hash":{},"data":data}) : helper)))
    + " : "
    + alias3(((helper = (helper = helpers.secs || (depth0 != null ? depth0.secs : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"secs","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n<div class=\"submit buttons\">\n	<button id=\"timer\">Timer</button>\n	<button id=\"stop\">Stop</button>\n	<button id=\"reset\">Reset</button>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<h1>This is Pomodigius: a Pomodoro app for Prodigious</h1>\n	\n	<div class=\"videoWrapper\">\n    <!-- Copy & Pasted from YouTube -->\n    	<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/CT70iCaG0Gs\" frameborder=\"0\" allowfullscreen></iframe>\n	</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.currentUser : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
templates['login.hdb'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<h1>Please write your credentials</h1>\n<div class=\"error\" style=\"\">Invalid username or password. Please try again.</div>\n<form id=\"login\">\n	<input type=\"text\" name=userEmail placeholder=\"write your email\" value=\""
    + alias3(((helper = (helper = helpers.userEmail || (depth0 != null ? depth0.userEmail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"userEmail","hash":{},"data":data}) : helper)))
    + "\">\n	<input type=\"password\" name=userPassword placeholder=\"write your password\" value=\""
    + alias3(((helper = (helper = helpers.password || (depth0 != null ? depth0.password : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"password","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"submit\">\n    	<input type=\"submit\" value=\"Login\" />\n    <div>\n</form>";
},"useData":true});
templates['menu.hdb'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "	<li><a id=\"home\"><span class=\"icon-home\"></span><div>Home</div></a></li>\n	<li><a id=\"logOut\"><span class=\"icon-exit\"></span><div>Log Out</div></a></li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<li><a id=\"home\"><span class=\"icon-home\"></span><div>Home</div></a></li>\n	<li><a id=\"login\"><span class=\"icon-key\"></span><div>Login</div></a></li>\n	<li><a id=\"singUp\"><span class=\"icon-profile\"></span><div>Sign up</div></a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.currentUser : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
templates['singUp.hdb'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<h1>Please give us the following information</h1>\n<form id=\"singUp\">\n	<input type=\"text\" name=userEmail placeholder=\"write your email\" value=\""
    + alias3(((helper = (helper = helpers.userEmail || (depth0 != null ? depth0.userEmail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"userEmail","hash":{},"data":data}) : helper)))
    + "\">\n	<input type=\"password\" name=userPassword placeholder=\"write your password\" value=\""
    + alias3(((helper = (helper = helpers.password || (depth0 != null ? depth0.password : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"password","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"submit\">\n    	<input type=\"submit\" value=\"Sign Up!\" />\n    <div>\n</form>\n";
},"useData":true});
})();