// Object constructor function
/*
  the data we are getting is coming from the function:

      projectsList.forEach(function(project) {
        projects.push(new Projects(project));
      });

  for each is looping through
  Key = the key in the projectsList object
*/
function Projects (projectsList) {
  for (key in projectsList) {
    this[key] = projectsList[key];
  }
}

Projects.allProjects = [];

// Function to get the project template from index.html and then compile and render the template.
Projects.prototype.toHtml = function () {
  var source = $('#project_template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

Projects.loadAll = function (inputProjects) {
  // Function to sort the projectsList array of objects by date.
  inputProjects.sort(function (currentProject, nextProject) {
    return (new Date(nextProject.projectDate)) - (new Date(currentProject.projectDate));
  })
  .forEach(function(ele) {
    // Push each constrcutred object from the projectsList into the projects array.
    Projects.allProjects.push(new Projects(ele));
  });
};

Projects.fetchAll = function () {
  if (localStorage.projects) {
    var projects = JSON.parse(localStorage.getItem('projects'));
    Projects.loadAll(projects);
    Projects.allProjects.forEach(function(project){
      $('#projects').append(project.toHtml());
    });
    console.log('Loaded from Local');
  } else {
    $.getJSON('../data/projectsData.json', function (projects) {
      Projects.loadAll(projects);
      localStorage.setItem('projects', JSON.stringify(projects));
      Projects.allProjects.forEach(function(project){
        $('#projects').append(project.toHtml());
      });
      console.log('Loaded from database');
    });
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
