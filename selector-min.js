var $=function(t,e){return new $.init(t,e)};$.init=function(t,e){if(t.nodeName&&!e)this[0]=t;else{try{var n=(e||document).querySelectorAll(t)}catch(e){n=t}[].push.apply(this,[].slice.call(n))}},$.init.prototype={each:function(t){for(var e=0;e<this.length;e++)t(this[e])},css:function(t,e){if("object"!=typeof t){t=t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()});var n=this[0],i=/(left||top)/.test(t);return arguments.length>1?(1<this.length?this.each(function(n){n.style[t]=e}):n.style[t]=e,""):""==n.style[t]?n.currentStyle&&!i?n.currentStyle[t]:i?Math.round(n.getBoundingClientRect()[t]):document.defaultView.getComputedStyle(n,null).getPropertyValue(t):n.style[t]}this.each(function(e){for(var n in t)e.style[n]=t[n]})},on:function(t,e){for(var n=this.length;n--;){var i=this[n];i.addEventListener?i.addEventListener(t,e,!1):i.attachEvent("on"+t,function(){return e.call(i,window.event)})}},append:function(t){var e=document.createElement(t.element||"div");if(t.hasOwnProperty("element")&&delete t.element,t.hasOwnProperty("text")&&(e.innerHTML=t.text)&&delete t.text,this[0].appendChild(e),t.hasOwnProperty("css")&&"object"==typeof t.css){for(var n in t.css)e.style[n]=t.css[n];delete t.css}for(var n in t)e.setAttribute(n,t[n])},remove:function(){for(i in this)"object"==typeof this[i]&&this[i].parentNode.removeChild(this[i])},attr:function(t,e){var n=this[0];return void 0!==e?e?n.setAttribute(t,e):n.removeAttribute(t):n.getAttribute(t)},val:function(t){var e=this[0];return arguments.length?e.value=t:e.value},text:function(t){var e=this[0];return arguments.length?e.innerHTML=t:e.innerHTML},toggle:function(t,e,n){this.css(t,this.css(t)==e?n:e)}};
