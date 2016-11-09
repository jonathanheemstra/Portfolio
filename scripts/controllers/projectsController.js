(function(module) {
  'use strict';
  var projectsController = {};

  projectsController.reveal = function () {
    $('#about, #projects, #contact').hide();
    $('#projects').fadeIn();
  };

  module.projectsController = projectsController;
}(window));
