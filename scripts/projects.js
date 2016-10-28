var projects = [];

// function Projects (project){
//   this.title = project.title;
//   this.img = project.img;
//   this.projectUrl = project.projectUrl;
//   this.body = project.body;
//   this.skills = project.skills;
//   this.date = project.projectDate;
// }

//Object constructor function
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

Projects.prototype.toHtml = function () {
  var source = $('#project_template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};
projectsList.sort(function(currentProject, nextProject) {
  return (new Date(nextProject.projectDate)) - (new Date(currentProject.projectDate));
});
projectsList.forEach(function(project) {
  projects.push(new Projects(project));
});
Handlebars.registerHelper('list', function (skills, options) {
  var ulEl = '<ul class="skills">';
  for (var i = 0, j = skills.length; i < j; i++) {
    ulEl = ulEl + '<li>' + options.fn(skills[i]) + '</li>';
  }
  return ulEl + '</ul>';
});
projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});
