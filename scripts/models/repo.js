(function(module) {
  'use strict';
  var repos = {};

  repos.allRepos = [];

  repos.getRepos = function (callback) {
    $.when(
      $.get('/github/users/jonathanheemstra/repos')
    ).done(callback);
  };

  repos.githubAttr = function(attr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.repos = repos;
}(window));
