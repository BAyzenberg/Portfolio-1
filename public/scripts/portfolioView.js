'use strict';
var portfolioView = [];


portfolioView.handelhandleMainNav = function () {
  $('.nav-list').on('click', '.tab', function(){
    $('.tab-content').hide()
    $('#' + $(this).data('content')).fadeIn();
  })
};


portfolioView.handelhandleMainNav();