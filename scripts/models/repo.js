(function(module) {
  'use strict';
  var repos = {};

  repos.allRepos = [];
  repos.getRepos = function () {
    $.ajax({
      url: 'https://api.github.com/users/jonathanheemstra/repos',
      type: 'GET',
      header: {'Authorization': 'token ' + githubToken},
      success: function(data){
        repos.allRepos = data;
      }
    });
  };

  module.repos = repos;
}(window));
