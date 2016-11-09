(function(module) {
  'use strict';
  var homeController = {};

  homeController.reveal = function () {
    $('#about, #projects, #contact').show();
  };

  module.homeController = homeController;
}(window));
