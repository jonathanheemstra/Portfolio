var portfolioView = {};

portfolioView.handleNav = function () {
  $('.main_nav').on('click', 'li', function(event){
    var navEl = $(this).find('a').attr('href');
    event.preventDefault();
    $('#about, #projects, #contact').hide();
    $(navEl).fadeIn().scroll();
  });
};

portfolioView.learnMoreExpand = function () {
  $('.project_description *:nth-of-type(n+2)').hide();
};

portfolioView.handleNav();
portfolioView.learnMoreExpand();
