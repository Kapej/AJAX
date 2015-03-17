window.onload = function(){
	document.getElementById("wyslij").onclick = function(){
		sprawdzFormularz();
	}
}

function sprawdzFormularz(){
	zadanie = "";
	zadanie = new XMLHttpRequest();
	var poleEmail = document.getElementById("email").value;
	var poleImie = document.getElementById("name").value;
	var zawartosc = "email=" + poleEmail + "&name=" + poleImie;
	var url = "form.php";
	zadanie.onreadystatechange = rejestracjaZakonczona;
	zadanie.open("POST", url, true);
	zadanie.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	zadanie.send(zawartosc);
}

function rejestracjaZakonczona(){
	if(zadanie.readyState == 4 && zadanie.status == 200)
	{
		document.getElementById("newsletter").innerHTML = zadanie.responseText;
	}
}