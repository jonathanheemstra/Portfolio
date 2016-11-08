(function(module) {
  'use strict';

  var portfolioView = {};
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

  module.portfolioView = portfolioView;
})(window);
