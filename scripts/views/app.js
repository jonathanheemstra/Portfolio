(function(module) {
  'use strict';

  var portfolioView = {};
  // Expand and Collapse project descriptions
  portfolioView.learnMoreExpand = function () {
    $('.project_body *:nth-of-type(n+2)').hide();
    $('.project').on('click', '.learn_more', function(event){
      event.preventDefault();
      $(this).parent().prev().find('.project_body *:nth-of-type(n+2)').slideDown();
      $(this).html('Show Less  &rarr;').removeClass('learn_more').addClass('learn_more_collapse');
    });
  };

  portfolioView.learnMoreCollapse = function () {
    $('.project').on('click', '.learn_more_collapse', function(event) {
      event.preventDefault();
      $(this).parent().prev().find('.project_body *:nth-of-type(n+2)').slideUp();
      $(this).html('Show More  &rarr;').removeClass('learn_more_collapse').addClass('learn_more');
    });
  };

  module.portfolioView = portfolioView;
})(window);
