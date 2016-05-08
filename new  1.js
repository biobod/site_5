
// Удачный слайдер, добавляет класс при навежении на елемент
// нет поддергиваний за из-за всплития, отлично работает
function b (){
var team = document.getElementById('team');
team.onmousemove = function a (){

var x = event.clientX;
var y = event.clientY;

var elements = team.querySelectorAll('div.team-foto-2');
for (var i = 0; i<elements.length; i++){
	var coords  = elements[i].getBoundingClientRect();
	
	if ( coords.left < x && coords.top < y && coords.bottom > y && coords.right > x) {
		
		elements[i].nextElementSibling.classList.add('active');
		
	} else {elements[i].nextElementSibling.classList.remove('active');}
}
};
};

// То же что и верхний, но не удачний.
// есть постоянная смена класа из-за делегиярования и
// всплытие елементов
function teamFoto(){

var team = document.getElementById('team');

team.onmouseover = function(event){
	var target = event.target;
	
	if (target.tagName !== 'IMG') return;
	
	var a = target.parentElement.parentElement.children[1];
	
	 a.classList.add('active');
}
team.onmouseout = function (){
	var target = event.target;
	
	if (target.tagName !== 'IMG') return;
	var a = target.parentElement.parentElement.children[1];
	
	a.classList.remove('active');
}
};