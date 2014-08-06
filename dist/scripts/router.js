/*global define*/
define([
'jquery',
'backbone',
], function ($, Backbone) {
'use strict';

var MyRouter = Backbone.Router.extend({
routes: {
'': 'a',
'/b': 'b'
},

a: function() { this.navigate('/cart'); },
b: function() {}

});

return MyRouter;
});
