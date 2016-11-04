(function(module) {
  // Object constructor function
  function Projects (projectsList) {
    for (key in projectsList) {
      this[key] = projectsList[key];
    }
  }

  // Function to get the project template from index.html and then compile and render the template.
  Projects.prototype.toHtml = function () {
    var source = $('#project_template').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
  };

  Projects.loadAll = function (inputProjects) {
    Projects.allProjects = inputProjects.sort(function (currentProject, nextProject) {
      return (new Date(nextProject.projectDate)) - (new Date(currentProject.projectDate));
    })
    .map(function(ele) {
      return new Projects(ele);
    });
  };

  Projects.loadDatabase = function () {
    $.getJSON('../data/projectsData.json', function (projects, message, xhr) {
      Projects.loadAll(projects);
      localStorage.setItem('projects', JSON.stringify(projects));
      Projects.allProjects.map(function(project){
        $('#projects').append(project.toHtml());
      });
      localStorage.setItem('ETag', xhr.getResponseHeader('ETag'));
      console.log('Loaded from database');
    });
  };

  Projects.fetchAll = function () {
    if (localStorage.projects) {
      $.ajax({
        url: '../data/projectsData.json',
        type: 'HEAD',
        success: function (data, message, xhr){
          if(localStorage.ETag === xhr.getResponseHeader('ETag')) {
            var projects = JSON.parse(localStorage.getItem('projects'));
            Projects.loadAll(projects);
            Projects.allProjects.map(function(project){
              $('#projects').append(project.toHtml());
            });
            console.log('Loaded from Local');
          } else {
            Projects.loadDatabase();
          }
        }
      });
    } else {
      Projects.loadDatabase();
    }
  };

  Handlebars.registerHelper('list', function (skills, options) {
    var ulEl = '<ul class="skills">';
    for (var i = 0, j = skills.length; i < j; i++) {
      ulEl = ulEl + '<li>' + options.fn(skills[i]) + '</li>';
    }
    return ulEl + '</ul>';
  });

  Projects.fetchAll();
  module.Projects = Projects;

})(window);
