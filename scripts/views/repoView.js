(function(module) {
  'use strict';
  var repoView = {};
  var repoCompiler = Handlebars.compile($('#github_template').html());

  
  module.repoView = repoView;
}(window));
