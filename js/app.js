var App = new (Backbone.View.extend({
     Models : {},
     Views: {},
     Collections: {},
     events: {
       'click a': function(e) {
         e.preventDefault();
         Backbone.history.navigate(e.target.pathname, {trigger: true});
       },
       start: function() {
         Backbone.history.start({pushState: true});
       }
    }
}))({el: document.body});