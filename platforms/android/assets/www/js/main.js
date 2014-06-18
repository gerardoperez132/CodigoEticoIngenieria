var resultado ; //obj con los datos
//Cargo cuando cargue
$(document).ready(function () {
	
	get();
	
});


//cargo cuando lo pidas
$("#refresh").click(function () {
	get();
	
});


//funcion para actualizar valores
var refresh = function(){
	//Cargo la fechas 
	$("h2").text(resultado.FECHA);
	
	//Carga el resultado de Triple Tachira
	$( "#TTa1-a" ).text(resultado.TRIPLETACHIRA1_A);
	$( "#TTa1-b" ).text(resultado.TRIPLETACHIRA1_B);
	$( "#TTa2-a" ).text(resultado.TRIPLETACHIRA2_A);
	$( "#TTa2-b" ).text(resultado.TRIPLETACHIRA2_B);
	$( "#TTa3-a" ).text(resultado.TRIPLETACHIRA3_A);
	$( "#TTa3-b" ).text(resultado.TRIPLETACHIRA3_B);
	
	//Carga el resultado de Triple Signo
	$( "#TSi1-a" ).text(resultado.TRIPLESIGNO1_A);
	$( "#TSi1-s" ).text(resultado.TRIPLESIGNO1_S);
	$( "#TSi2-a" ).text(resultado.TRIPLESIGNO2_A);
	$( "#TSi2-s" ).text(resultado.TRIPLESIGNO2_S);
	$( "#TSi3-a" ).text(resultado.TRIPLESIGNO3_A);
	$( "#TSi3-s" ).text(resultado.TRIPLESIGNO3_S);
	
}; 

//Funcion para buscar los resultados en el servidot
function get(){
	
	myurl = "http://nodejs-fyc.rhcloud.com/";
	jQuery.ajax({
	    type: 'GET',
	    dataType: "json",	
	    crossDomain: true,
	    url: myurl,
	    success: function () {
	       //fino
	    },
	    error: function () {
	    	$('#eConexion').trigger('click');
	    },

	}).done(function (data) {
	    console.log(data);
	    resultado = data;
	    refresh();
	});
	
}



