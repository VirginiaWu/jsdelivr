/*! Qoopido.js library 3.6.9, 2015-07-10 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e){window.qoopido.register("jquery/function/prefetch",e,["jquery"])}(function(e,r,n,t,i,u,f){"use strict";var o=e.jquery||i.jQuery,c=o("head"),p=[];return o.prefetch=function(){var e=o.unique(o('a[rel="prefetch"]').removeAttr("rel").map(function(){return o(this).attr("href")}));e.each(function(e,r){-1===o.inArray(r,p)&&(o("<link />",{rel:"prefetch",href:r}).appendTo(c),o("<link />",{rel:"prerender",href:r}).appendTo(c))})},o});