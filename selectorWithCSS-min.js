var $=function(a,b){return new $.init(a,b)};$.init=function(a,b){a.nodeName&&!b?this[0]=a:[].push.apply(this,[].slice.call((b||document).querySelectorAll(a)))};
$.init.prototype={each:function(a){for(b=0;b<this.length;b++)a(this[b])},css:function(a,b){if("object"==typeof a)this.each(function(b){for(c in a)b.style[c]=a[c]});else{a=a.replace(/-([a-z])/g,function(a){return a[1].toUpperCase()});c=this[0];return 1<arguments.length?(1<this.length?this.each(function(c){c.style[a]=b}):c.style[a]=b,""):""===c.style[a]?c.currentStyle?c.currentStyle[a]:document.defaultView.getComputedStyle(c,null).getPropertyValue(a):c.style[a]}},on:function(a,b){for(c=
this.length;c--;){d=this[c];d.addEventListener?d.addEventListener(a,b,!1):d.attachEvent("on"+a,function(){return b.call(d,window.event)})}}};
