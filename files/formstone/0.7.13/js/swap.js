/*! formstone v0.7.13 [swap.js] 2015-08-13 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){b.enabled=!1,b.active=!1,b.classes=a.extend(!0,{},l,b.classes),b.target=this.data(k+"-target"),b.$target=a(b.target).addClass(b.classes.raw.target),b.linked=this.data(k+"-linked"),b.mq="(max-width:"+(b.maxWidth===1/0?"100000px":b.maxWidth)+")";var c=this.data(k+"-group");b.group=c?"[data-"+k+'-group="'+c+'"]':!1,!b.collapse&&b.group&&a(b.group).eq(0).attr("data-"+k+"-active","true"),b.onEnable=this.data(k+"-active"),b.$swaps=a().add(this).add(b.$target),this.fsTouch({tap:!0}).on(m.tap+b.dotGuid,b,i),a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){g.call(b.$el,b,!0)},leave:function(){h.call(b.$el,b,!0)}})}function d(b){a.fsMediaquery("unbind",b.rawGuid),b.$swaps.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")).off(m.namespace),this.fsTouch("destroy")}function e(b,c){if(b.enabled&&!b.active){b.group&&!c&&a(b.group).not(b.$el)[j.namespaceClean]("deactivate");var d=b.group?a(b.group).index(b.$el):null;b.$swaps.addClass(b.classes.raw.active),c||(b.linked&&a(b.linked).not(b.$el).swap("activate",!0),this.trigger(m.activate,[d])),b.active=!0}}function f(b,c){b.enabled&&b.active&&(b.$swaps.removeClass(b.classes.raw.active),c||(b.linked&&a(b.linked).not(b.$el).swap("deactivate",!0),this.trigger(m.deactivate)),b.active=!1)}function g(b,c){b.enabled||(b.enabled=!0,b.$swaps.addClass(b.classes.raw.enabled),c||a(b.linked).not(b.$el).swap("enable"),this.trigger(m.enable),b.onEnable?(b.active=!0,b.$swaps.addClass(b.classes.raw.active)):(b.active=!0,f.call(this,b)))}function h(b,c){b.enabled&&(b.enabled=!1,b.$swaps.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")),c||a(b.linked).not(b.$el).swap("disable"),this.trigger(m.disable))}function i(a){n.killEvent(a);var b=a.data;b.active&&b.collapse?f.call(b.$el,b):e.call(b.$el,b)}var j=b.Plugin("swap",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{tap:"tap",activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:c,_destruct:d,activate:e,deactivate:f,enable:g,disable:h}}),k=j.namespace,l=j.classes,m=j.events,n=j.functions}(jQuery,Formstone);