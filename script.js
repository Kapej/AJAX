window.onload = pokazObiekt;

function pokazObiekt(){
	var zawartosc = {
		"kursy":{
			"tytul":"Kurs C++",
			"nosnik":"DVD"
		},
		"ksia"
	};

	var obiekt = eval(zawartosc);
	alert(obiekt.cena);
}