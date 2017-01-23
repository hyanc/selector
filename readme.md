# selectorWithCSS
Lightweight JavaScript DOM selector with prototyped CSS method and event handler
- 916 bytes in minified version.
- Selector with CSS, context & native DOM support.
- Event handler.
- CSS manipulation, with current style & object literal support.

```html
<div id="z" class="a">
	<i>ghi</i>
	<input id="search" value="xyz" />
	<i>mno</i>
</div>
```
```javascript
$('#search').css('color','red');
//set red color to selector

$('#z > input').css('color');
//retrieve computed/current style from css

$('#z > input').css('top');
//retrieve current offset

$(document.getElementById('search')).css('color');
//retrieve style from native DOM expression

$('#z > i').css('font-weight','bolder');
//set all i element in id z to bolder font

$('#z > input').css({
	'background-color':'red',
	'font-style':'italic',
	'color':'white'
});
//set input's style with object-literal

$('#z > i').each(function(o){
	o.style.color = 'red';
});
//set all i element in id z to red color with native style

$('i').on('click',function(){
    $(this).css('background-color','yellow');
});
//attach an event handler

$('#z').on('click',function(){
	$('i',this).css('color','blue');
	//set i element from context
	
	$(['i','input'],this).css('color','blue');
	//set multiple elements from context
});
```
