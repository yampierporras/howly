var ancho = (window.innerWidth);
if(ancho>768){
	$(document).ready(function(){
		$(window).scroll(function(){
			var barra = $(window).scrollTop();
			var posicion =  (barra * 0.10);
			$('body').css({
				'background-position': '0 -' + posicion + 'px'
			});
		});
	});
}
