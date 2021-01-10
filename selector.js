var $ = function(expr, context) {
	return new $.init(expr, context);
};
$.init = function(expr,context) {
	if(expr.nodeName && !context) this[0] = expr;
	else {
		try { var el = (context||document)['querySelectorAll'](expr); }
		catch(err){ var el = expr; }
		[].push.apply(this,[].slice.call(el));
	}
};
$.init.prototype = {
	each: function(el) {
		for (var l=0;l<this.length;l++) el(this[l]);
	},
	css: function(prop, val) {
		if ('object' == typeof prop) this.each(function(val) {
			for(var i in prop) val.style[i] = prop[i];
		});
		else {
			prop = prop.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
			var el = this[0], lt = /(left||top)/.test(prop);
			if(arguments.length>1) return 1 < this.length ? this.each(function(o){o.style[prop] = val;}) : el.style[prop] = val,"";
			else return el.style[prop]==''?(
				el.currentStyle && !lt?
				el.currentStyle[prop]:(lt?
					Math.round(el.getBoundingClientRect()[prop]):
					document.defaultView.getComputedStyle(el, null).getPropertyValue(prop)
				)
			):el.style[prop];
		}
	},
	on: function(evt, fn) {
		for (var l = this.length; l--;) {
			var el = this[l];
			el.addEventListener ? el.addEventListener(evt, fn, !1) : el.attachEvent("on" + evt, function() {
				return fn.call(el, window.event);
			});
		}
	},
	append: function(param) {
		var el = document.createElement(param.element||'div');
		param.hasOwnProperty('element') && delete param.element;
		param.hasOwnProperty('text') && (el.innerHTML = param.text) && delete param.text;
		this[0].appendChild(el);
		if(param.hasOwnProperty('css') && ('object' == typeof param.css)){
			for(var i in param.css)	el.style[i] = param.css[i];
			delete param.css;
		}
		for(var i in param) el.setAttribute(i,param[i]);
	},
    	remove: function() {
    		this[0] !== undefined && this[0].parentNode.removeChild(this[0]);
    	},
	attr: function(key,val){
		var el = this[0];
		return val!==undefined?(
			val?el.setAttribute(key,val):el.removeAttribute(key)
		): el.getAttribute(key);
	},
    	val: function(dat){
		var el = this[0];
		return arguments.length ? (el.value = dat) : el.value;
	},
	text: function(dat){
		var el = this[0];
		return arguments.length ? (el.innerHTML = dat) : el.innerHTML;
	},
	toggle: function(key,val1,val2){
		this.css(key,this.css(key)==val1?val2:val1);
	}
};
