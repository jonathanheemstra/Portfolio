(function(module) {
  'use strict';
  var homeController = {};

  homeController.reveal = function () {
    $('main').show();
  };

  module.homeController = homeController;
}(window));
