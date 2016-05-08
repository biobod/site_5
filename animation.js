//запускаем функции которые в виндов.онреди
function totalFunction(){
	
	topSize();
heightAll ();
	 secondPosition();
	
};

// Размер слайда от размера окна
function topSize (){

var size = document.documentElement.clientHeight;
var top = document.getElementById("top");
var size1 = size + 'px';
top.style.height = size1;


}

function showMeny(){
	
	var scrollD = document.getElementById("scroll-left-d");
	scrollD.onclick =
	function(){
		scrollD.classList.add('scroll-left-active');
		
	};
	
}

// Слайдер в топе

$(document).ready(function() {
   var k = true;
   var slideTop = setTimeout(function slide (){
	
	if (k == true)
	{k = false;
       $('.top-slide:last').fadeOut(1000);
	   $('.top-slide:first').fadeIn(1000);
	 clearTimeout(slideTop);
	 slideTop = setTimeout(slide, 5000);
	}
	 else  {
		 k = true;
	 $('.top-slide:last').fadeIn(1000);
	   $('.top-slide:first').fadeOut(1000);
		slideTop = setTimeout(slide, 5000);
	 };
	   
}, 5000);
});



// Назначаем класс находячь на елементе
//Благодаря привязке к коорд. нет поддергивания. 
function teamFotoFon (){
var team = document.getElementById('team');
team.onmousemove = function a (event){

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
teamFotoFon();


// Гортае блок услуг при клику
function moveService (x, y){
	var textInt = document.getElementById('text-inl');
	textInt.style.right = x +'%';
	finger1(y);
}
// Запускаэ блок на другу позицыю 
function secondPosition (){
	
	moveService (33.32, 1);

}
// Указатель (треугольник)в услугах 
function finger1(y){
	var servBott = document.getElementById('serv-bott');
	var clases2 = servBott.querySelectorAll('div.service-bottom-x');
	
	clases2[y].classList.add('finger');
	for (var i = 0; i<clases2.length; i++){
		if (i===y) continue;
		else clases2[i].classList.remove('finger');
		
	}
};
function revFinger (){
	var reviews = document.getElementById('reviews');
	var finger1= reviews.querySelector('div.rev-finger1');
	var finger2= reviews.querySelector('div.rev-finger2');
	var elements = reviews.querySelectorAll('div.rev-texts');

finger2.onclick = function a(){
	var y = 1;
for (var i = 0; i<elements.length; i++){
	if (i===y){	elemtnts[i].classList.add('rev-active')}
    else {elemtnts[i].classList.remove('rev-active')}	
};
}

	
};
// высота всей страницы 
function heightAll (){
var all = document.getElementById("all");	
var top = document.getElementById("top");
var main = document.getElementById("main");
var team = document.getElementById("team");
var service = document.getElementById("service");
var reviews = document.getElementById("reviews");
var portfolio = document.getElementById("portfolio");
var footer = document.getElementById("footer");


all.style.height = top.offsetHeight + main.offsetHeight + team.offsetHeight +
service.offsetHeight + reviews.offsetHeight + portfolio.offsetHeight + footer.offsetHeight  + 'px';
}

// JQuery
// поворот елемента слева в меню и видвигание
$(document).ready(function() {
    $('#scroll-left-d').click(function() {
        $('#scroll-left-d').toggleClass('scroll-left-active');
		$('.scroll-left-meny').toggleClass('menu-left-active');
		
		
    });
	
	
	// cлайдер в отзывах
var slideNum = 0;
var hwNeedLinks = true;

 var slideCount = $("#sliders .rev-texts").length;
var animeSlide = function(finger){
	if (finger == "next") {
		if(slideNum==(slideCount-1)){slideNum = 0;}
		else {slideNum++}
	}
	else if (finger == "prew"){
		if (slideNum == 0){slideNum = slideCount-1;}
		else {slideNum =slideNum-1}
	}
	else {colsole.log("something come no well");}
	
	
     $('.rev-texts.rev-active').removeClass('rev-active');  
     $('.rev-texts').eq(slideNum).addClass('rev-active');	 
}	
if(hwNeedLinks){
var $linkArrow = $('#rev-finger1 #rev-finger1')
         
    $('#rev-finger2').click(function(){
        animeSlide("next");
 
        })
    $('#rev-finger1').click(function(){
        animeSlide("prew");
        })
}
	
// fotogalery 
var fotoCount = $("#portfolio .port-fotos").length;
$('#portfolio .port-fotos img').click(function(){
	var numberF = $(this).attr('src');		
	var numberF2 = +(numberF.substring(13,14));
	
	
	$('#port-centr-foto').attr('src',numberF);
        $('.foto-active').show('slow');
        
	$('#cansel').click(function(){
		$('.foto-active').hide('fast');
	
	});	
$('#arr1').click(function(){
		if (numberF2<fotoCount){ numberF2++}
		else if(numberF2 == fotoCount){numberF2 = 1; }
		else {return fasle}
		$('#port-centr-foto').attr('src',numberF.replace(numberF.substring(13,14),numberF2));
		
	});
$('#arr2').click(function(){
		if ( (numberF2 <= fotoCount) && (numberF2 !=1) ){numberF2 = numberF2-1}
		else if(numberF2 == 1){numberF2 = fotoCount; }
		else {return fasle}
		
		$('#port-centr-foto').attr('src',numberF.replace(numberF.substring(13,14),numberF2));
		
	});
	});
	
// карта в футере
$('#footer-home i').click(function(){
	$('#footer-home .footer-map').toggleClass('map-active');
$('#footer').toggleClass('footer-active');
 heightAll ();
 
});

//плавний переход по якорю с меню
$("#menu-ul-1 li").on("click","a", function (event) {

	event.preventDefault();
	
var id  = $(this).attr('href');
var  top = $(id).offset().top;


$('body,html').animate({scrollTop: top}, 1000);

setTimeout(function(){
$('.scroll-left-meny').toggleClass('menu-left-active');
$('#scroll-left-d').toggleClass('scroll-left-active');

},1200);
});
});

 
window.onload = totalFunction;
 