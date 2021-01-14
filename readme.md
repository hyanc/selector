# Specifications

I always wanted jQuery-like library in minimal, but with only some essential functions.<br />
The original code (Release 1.0) was less than 1 KB (min ver).<br />
The latest code is 1.6 KB (min ver) contain patch and essential functions, they are:
- ***css***, support object literal
- ***each***, loop
- ***on***, event handler
- ***append*** node, css param support
- ***remove*** node
- ***attr***ibute, add and remove
- ***val***, read and write value
- ***text***, read and write innerHTML
- ***toggle***, handy function for quick switch between two css rule

---
# HTML Sample
```html
<div id="z">
	<i>ghi</i>
	<input id="search" value="xyz" />
	<i>mno</i>
</div>
```
---

# CSS
```javascript
//set red color to selector
$('#search').css('color','red');

//read computed/current style from css
$('#z > input').css('color');

//read current offset
$('#z > input').css('top');

//read style from native DOM expression
$(document.getElementById('search')).css('color');

//set all i element in id z to bolder font
$('#z > i').css('font-weight','bolder');

//set input's style with object-literal
$('#z > input').css({
	'background-color':'red',
	'font-style':'italic',
	'color':'white'
});
```
---
# HTML Attribute
```javascript
//add attribute
$('#z').attr('class','content')

//read attribute
$('#z').attr('class')

//remove attribute
$('#z').attr('class','')
```
---

# Loop
```javascript
//set all i element in id z to red color with native style
$('#z > i').each(function(o){
	o.style.color = 'red';
});
```
---

# Event Handler
```javascript
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

//toggle between two value
$('#search').on('click',function(){
    $(this).toggle('background-color','silver','yellow');
});
```
---

# Append
Predefined params
- **element**, new element name.
- **text**, innerHTML.
- **css**, style with object parameters support.

```javascript
//add element and attributes
$('#z').append({
	'element':'input',
	'type':'checkbox',
	'id':'box',
	'checked':true,
	'css': {
		'cursor' : 'pointer'
	}
});
```
---

# Ajax
Demonstrate append with additional event handler
```javascript
//setup ajax call
$('#z').append({
	'element':'script',
	'type':'text/javascript',
	'async':true,
	'src':'http://example.com/services.php',
	'id':'response',
	'onload':(function(){
		//code after services.php is successfully called
	})()
});
```
