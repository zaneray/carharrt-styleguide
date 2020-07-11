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

  $('.toggle-button').on('click touchstart', function(e) {
    var toggleState = $(this).attr("aria-checked");

    if (toggleState === 'true') {
      $(this).attr("aria-checked", "false");
    } else {
      $(this).attr("aria-checked", "true");
    }
  })

  var $styleGuideAnchorList = $('#style-guide-anchor-list');
  //set up the anchor nav links
  $('.style-guide-section').each(function(){
    var id = this.id,
      title = $(this).children('.section-header').text();
    $styleGuideAnchorList.append('<li class="style-guide-anchor-item"><a href="#' + id + '" class="style-guide-anchor-link">' + title + '</a></li>')
  });

  $('.js-view-source').each(function(){
    var $this = $(this),
        html = $this[0].innerHTML.trim();

    var sourceViewerHtml = '<div class="source-view-code">'
    sourceViewerHtml += '<xmp>' + html + '</xmp>';
    sourceViewerHtml += '</div>';

    $this.after(sourceViewerHtml);
  });
});


function bindAccordionToggle(parentID) {
  console.log('in accordion');
  $('#' + parentID + ' li .accordion-trigger').on('click', function() {
    console.log('triggered function');
    var $trigger = $(this),
      $content = $('#' + $trigger.attr('aria-controls')),
      accordionIsOpen = $trigger.attr('aria-expanded');

    // (Optional) Ensure no other accordions are open
    checkOtherAccordions(parentID, $trigger[0]);

    if (accordionIsOpen ==='true') {
      $trigger.attr('aria-expanded', 'false');
      $content.attr('aria-hidden', 'true');
      $content.slideUp();
    } else {
      $trigger.attr('aria-expanded', 'true');
      $content.attr('aria-hidden', 'false');
      $content.slideDown();
    }
  });
};

// (Optional) Ensure no other accordions are open
function checkOtherAccordions (parentID, trigger) {
  var accordionTriggers = $('#' + parentID + ' li .accordion-trigger');

  for (var i=0; i < accordionTriggers.length; i++) {
    // Do not close the accordion we're trying to open
    if (accordionTriggers[i] != trigger) {

      // If another accordion is open, close it
      if (($(accordionTriggers[i]).attr('aria-expanded')) == 'true') {
        $(accordionTriggers[i]).attr('aria-expanded', 'false');
        var otherContent = $(accordionTriggers[i]).attr('aria-controls');
        $('#' + otherContent).attr('aria-hidden', 'true');
        $('#' + otherContent).slideUp();
      }
    }
  }
}




