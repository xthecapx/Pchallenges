(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['compiled-templates.js'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\ntemplates['home'] = template({\"compiler\":[7,\">= 4.0.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var helper, alias1=helpers.helperMissing, alias2=\"function\", alias3=container.escapeExpression;\n\n  return \"<h3>\"\n    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{\"name\":\"name\",\"hash\":{},\"data\":data}) : helper)))\n    + \"</h3>\\n<p>\"\n    + alias3(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{\"name\":\"comments\",\"hash\":{},\"data\":data}) : helper)))\n    + \"</p>\";\n},\"useData\":true});\n})();";
},"useData":true});
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<h3>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n<p>"
    + alias3(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"comments","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});
})();