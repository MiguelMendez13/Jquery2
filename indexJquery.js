function Calcular(){
	var PNum = parseInt($('.PNum').val());
	var SNum = parseInt($('.SNum').val());
	var Simbolo = $('.Simbolo').val();
	if(Simbolo=="+"){
		$('.RNum').val(PNum+SNum);
	}
	else if(Simbolo=="-"){
		$('.RNum').val(PNum-SNum);
	}
	else if(Simbolo=="*"){
		$('.RNum').val(PNum*SNum);
	}
	else if(Simbolo=="/"){
		$('.RNum').val(PNum/SNum);
	}
	else{
		alert("ingresa un simbolo aceptado: + - * /");
	}
}