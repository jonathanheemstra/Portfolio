(function(module) {
  'use strict';
  var contactController = {};

  contactController.reveal = function () {
    $('#about, #projects, #contact').hide();
    $('#contact').fadeIn();
  };

  module.contactController = contactController;
}(window));
