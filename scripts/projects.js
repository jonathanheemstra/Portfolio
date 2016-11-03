(function(module) {
  // Object constructor function
  // function Projects (projectsList) {
  //   for (key in projectsList) {
  //     this[key] = projectsList[key];
  //   }
  // }

  //Object is = to the global object of JS (i.e. similar to how we can call JSON)
  function Projects (opts) {
    console.log('THIS IS OBJECT (line 11)\n', Object);
    console.log('THIS IS OBJECT.KEYS (line 12)\n', Object.keys);
    console.log('THIS IS OBJECT.VALUES (line 13)\n', Object.values);
    console.log('THIS IS opts (line 14)\n', opts);

    Object.keys(opts).forEach(function(prop) {
      console.log('THIS IS prop (line 17)\n', prop);
      this[prop] = opts[prop];
      console.log('THIS IS opts[prop] (line 19)\n', opts[prop]);
    }, this); // The optional 'this' here is necessary to keep context.
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
    Projects.allProjects.map(function(project){
      $('#projects').append(project.toHtml());
    });
  };

  Projects.loadDatabase = function () {
    $.getJSON('../data/projectsData.json', function (projects, message, xhr) {
      Projects.loadAll(projects);
      localStorage.setItem('projects', JSON.stringify(projects));
      localStorage.setItem('ETag', xhr.getResponseHeader('ETag'));
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
          } else {
            Projects.loadDatabase();
          }
        }
      });
    } else {
      Projects.loadDatabase();
    }
  };

  Projects.allSkillsList = function () {
    return Projects.allProjects.map(function(projectObject) {
      // returns an array that contains the skills arrays for each project
      return projectObject.skills;
    })
    .reduce(function(accumulator, next) {
      // Flattens the returned array of skills arrays from .map() function (contains duplicates)
      return accumulator.concat(next);
    }, [])
    //find the indexOf each value (skill) in the unqiueSkills array (which is the name given to the array produced by .reduce()) to see if it already exists at the current index. If the skill is at the current index return true and pass on to the final array being constructed by the .filter() if skill is not at the current index then return false and do not pass on to the final array being constructed by the .filter().
    .filter(function(skill, idx, unqiueSkills) {
      return idx === unqiueSkills.indexOf(skill);
    });
  };

  Handlebars.registerHelper('list', function (skills, options) {
    var ulEl = '<ul class="skills">';
    for (var i = 0, j = skills.length; i < j; i++) {
      ulEl = ulEl + '<li>' + skills[i] + '</li>';
    }
    return ulEl + '</ul>';
  });

  Projects.fetchAll();
  module.Projects = Projects;

})(window);
