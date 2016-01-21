//Backbone View for Board
var app = app || {};

(function ($) {
	'use strict';

	app.BoardView = Backbone.View.extend({
            tagName:  'div',
            
            template : _.template($('#board-template').html()),

            events: {
            },
            
            //Handling the user response and updating required data
            
            initialize: function () {
                _.bindAll(this);
                
            },

            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
	});
        
})(jQuery);