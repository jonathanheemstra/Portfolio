(function(module) {
  'use strict';

  var repoView = {};

  var repoCompiler = Handlebars.compile($('#github_template').html());

  repoView.renderRepoStats = function() {
    $('#github_stats').append(
      repos.githubAttr('name')
      .map(repoCompiler)
    );
  };

  repos.getRepos(repoView.renderRepoStats);

  module.repoView = repoView;
}(window));
