(function(module) {
  'use strict';
  var repos = {};

  repos.getRepos = function (callback) {
    $.when(
      $.get('/github/users/jonathanheemstra/repos', function(data) {
        repos.allRepos = data;
      })
    ).done(callback);
  };

  repos.githubAttr = function(attr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.repos = repos;
}(window));
