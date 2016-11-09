(function(module) {
  'use strict';
  var aboutController = {};

  aboutController.reveal = function () {
    $('#about, #projects, #contact').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
}(window));
