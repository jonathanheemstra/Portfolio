'use strict';

(function(module) {

  var portfolioView = {};

  // Hide sections once user clicks on main nav
  portfolioView.handleNav = function () {
    $('.main_nav').on('click', '.portfolio li', function(event){
      var navEl = $(this).find('a').attr('href');
      event.preventDefault();
      $('#about, #projects, #contact').hide();
      $(navEl).fadeIn().scroll();
    });
  };

  // Expand and Collapse project descriptions
  portfolioView.learnMoreExpand = function () {
    $('.project_description *:nth-of-type(n+2)').hide();
    $('#projects').on('click', '.learn_more', function(event){
      event.preventDefault();
      $(this).prev().children('.project_description *:nth-of-type(n+2)').slideDown();
      $(this).html('Collapse  &rarr;').removeClass('learn_more').addClass('learn_more_collapse');
    });
  };
  portfolioView.learnMoreCollapse = function () {
    $('#projects').on('click', '.learn_more_collapse', function(event) {
      event.preventDefault();
      $(this).prev().children('.project_description *:nth-of-type(n+2)').slideUp();
      $(this).html('Learn more  &rarr;').removeClass('learn_more_collapse').addClass('learn_more');
    });
  };

  // Invoke all functions
  portfolioView.handleNav();
  portfolioView.learnMoreExpand();
  portfolioView.learnMoreCollapse();

  module.portfolioView = portfolioView;

})(window);
