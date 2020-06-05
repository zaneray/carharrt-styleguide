$(function(){
  //Theme toggle click event
  var $themeToggle = $('.js-theme-toggle'),
    $interfaceElementContainer = $('#interface-elements');

  $themeToggle.on('click', function(){
    $themeToggle.toggleClass("dark-theme");
    $interfaceElementContainer.toggleClass("dark-theme");
  });

  var $styleGuideAnchorNavSpan = $('.style-guide-anchor-span');
  $styleGuideAnchorNavSpan.on('click',function(e){
    e.preventDefault();
    $('.style-guide-anchor-nav').toggleClass('active');
  });


  $('.style-guide-anchor-nav').on('click touchstart',function(e){
    e.stopPropagation();
  })

  $('body').on('click touchstart',function() {
    $('.style-guide-anchor-nav').removeClass('active');
  })

  var $styleGuideAnchorList = $('#style-guide-anchor-list');
  //set up the anchor nav links
  $('.style-guide-section').each(function(){
    var id = this.id,
      title = $(this).children('.section-header').text();
    $styleGuideAnchorList.append('<li class="style-guide-anchor-item"><a href="#' + id + '" class="style-guide-anchor-link">' + title + '</a></li>')
  });

  //build out the base nav section
  var baseHTML = '<div class="style-guide-base-nav"><div class="container"><ul>';

  //Each style guide page
  baseHTML += '<li><a href="/outdoor-research">Core Styles</a></li>';
  baseHTML += '<li><a href="/outdoor-research/templates/single-column.html">Single Column</a></li>';
  baseHTML += '<li><a href="/outdoor-research/templates/single-column-media.html">Single Column w/ Media</a></li>';
  baseHTML += '<li><a href="/outdoor-research/templates/components.html">Components</a></li>';

  baseHTML += '</ul></div></div>';

  $('body').append(baseHTML);

});

