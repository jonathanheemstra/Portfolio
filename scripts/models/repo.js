(function(module) {
  'use strict';
  var repos = {};

  repos.allRepos = [];

  repos.getRepos = function (callback) {
    $.ajax({
      url: 'https://api.github.com/users/jonathanheemstra/repos',
      type: 'GET',
      header: {'Authorization': 'token ' + githubToken},
      success: function(data){
        repos.allRepos = data;
        callback();
      }
    });
  };

  repos.githubAttr = function(attr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.repos = repos;
}(window));
