"use strict";navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js"),function(){var e=!1,i=0;function n(){$("#responsive-nav ul").toggleClass("active"),$("#menu-opener").toggleClass("glyphicon-menu-hamburger")}$("#contact-form").on("submit",(function(e){return e.preventDefault(),sendForm($(this)),!1})),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),$("#menu-opener").on("click",n),$(".menu-link").on("click",n),setInterval((function(){i<7?i++:i=0,$("#gallery .inner").css({left:"-"+100*i+"%"})}),4e3),$(window).scroll((function(){var i,n=(i=$("#description").height(),$(window).scrollTop()>$(window).height()-2*i);n&&!e&&(e=!0,$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")),!n&&e&&(e=!1,$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast"))}))}();