var projects = [];

function Projects (project){
  this.title = project.title;
  this.img = project.img;
  this.projectUrl = project.projectUrl;
  this.body = project.body;
  this.skills = project.skills;
}
Projects.prototype.toHtml = function () {
  var $newProject = $('article.project_template').clone();
  $newProject.find('h4 a:contains("Title")').text(this.title);
  $newProject.find('img').attr('src', this.img);
  $newProject.find('a').attr('href', this.projectUrl);
  $newProject.find('.project_description').html(this.body);
  $newProject.find('.project_skills').html(this.skills);
  $newProject.removeClass('project_template').addClass('project');
  return $newProject;
};
projectsList.forEach(function(project) {
  projects.push(new Projects(project));
});
projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});
