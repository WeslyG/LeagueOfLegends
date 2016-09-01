var MyVar;
var Key;
var Ob9;
var Ob18;
var Ob10;
var Ob32;
var Nab;

function proverka(input) {
	var value = input.value;
	var rep = /[@#$%^| &*()=№;?!_+~`\/.;ёЁ":'a-zA-Zа-яА-Я]/;
	if (rep.test(value)) { 
		value = value.replace(rep, '')
		input.value = value;
	} 
}

function GO() {

MyVar = document.getElementById("one").value;

if (MyVar >= 350) {
	MyVar= Math.floor (MyVar*2.86);
	}
	else if (MyVar >= 850){
		MyVar= Math.floor (MyVar*3.0);
	}
	else if (MyVar >= 1700) {
		MyVar= Math.floor (MyVar*3.1);
	}
	else if (MyVar >= 1700) {
		MyVar= Math.floor (MyVar*3.18);
	}
	else if (MyVar >= 3400) {
		MyVar= Math.floor (MyVar*3.2);
	}
	else {
		MyVar = Math.floor (MyVar*2.75);
	}

document.getElementById('Rito').innerHTML = MyVar; 

Nab = Math.floor (MyVar/195);
	if (MyVar >= 1950) {
		Nab=Nab+1;
	}

document.getElementById('Rito4').innerHTML = Nab; 


Key= Math.floor (MyVar/125);

document.getElementById('Rito2').innerHTML = Key; 

document.getElementById('Rito3').innerHTML = Key; 

Ob9 = Math.floor (MyVar/975);
document.getElementById('Rito5').innerHTML = Ob9; 

Ob10 = Math.floor (MyVar/1350);
document.getElementById('Rito8').innerHTML = Ob10; 

Ob18 = Math.floor (MyVar/1850);
document.getElementById('Rito6').innerHTML = Ob18; 

Ob32 = Math.floor (MyVar/3250);
document.getElementById('Rito7').innerHTML = Ob32; 


}



