/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';

	app.AppView = Backbone.View.extend({

            el: '.trello-like-app',

            appViewTemplate: _.template($('#appview-template').html()),

            initialize: function () {
                    this.$el.find('#content').append(this.appViewTemplate);
                    
            },

            render: function () {

            },
            
            renderHomeButton: function() {
                
            },
                
            renderHelpSection: function() {
            },

            renderHomeSection: function() {
            },

            events: {
            },

            updateUrl: function() {
                //if routes hash exists and is used this method will help updating the URL.
            }

	});
}) (jQuery);


