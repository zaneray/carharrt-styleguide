$(function(){var e=$(".js-theme-toggle"),t=$("#interface-elements");e.on("click",function(){e.toggleClass("dark-theme");t.toggleClass("dark-theme")});var a=$(".style-guide-anchor-span");a.on("click",function(e){e.preventDefault();$(".style-guide-anchor-nav").toggleClass("active")});$(".style-guide-anchor-nav").on("click touchstart",function(e){e.stopPropagation()});$("body").on("click touchstart",function(){$(".style-guide-anchor-nav").removeClass("active")});$(".toggle-button").on("click touchstart",function(e){var t=$(this).attr("aria-checked");if(t==="true"){$(this).attr("aria-checked","false")}else{$(this).attr("aria-checked","true")}});var i=$("#style-guide-anchor-list");$(".style-guide-section").each(function(){var e=this.id,t=$(this).children(".section-header").text();i.append('<li class="style-guide-anchor-item"><a href="#'+e+'" class="style-guide-anchor-link">'+t+"</a></li>")});$(".js-view-source").each(function(){var e=$(this),t=e[0].innerHTML.trim();var a='<div class="source-view-code">';a+="<xmp>"+t+"</xmp>";a+="</div>";e.after(a)})});function bindAccordionToggle(i){console.log("in accordion");$("#"+i+" li .accordion-trigger").on("click",function(){console.log("triggered function");var e=$(this),t=$("#"+e.attr("aria-controls")),a=e.attr("aria-expanded");checkOtherAccordions(i,e[0]);if(a==="true"){e.attr("aria-expanded","false");t.attr("aria-hidden","true");t.slideUp()}else{e.attr("aria-expanded","true");t.attr("aria-hidden","false");t.slideDown()}})}function checkOtherAccordions(e,t){var a=$("#"+e+" li .accordion-trigger");for(var i=0;i<a.length;i++){if(a[i]!=t){if($(a[i]).attr("aria-expanded")=="true"){$(a[i]).attr("aria-expanded","false");var r=$(a[i]).attr("aria-controls");$("#"+r).attr("aria-hidden","true");$("#"+r).slideUp()}}}}