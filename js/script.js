var tab = ["img/chat.jpg", "img/ane.jpg", "img/lionne.jpg", "img/lapins.jpg", "img/chien.jpg", "img/ours.jpg", "img/chat.jpg", "img/ane.jpg", "img/lionne.jpg", "img/lapins.jpg", "img/chien.jpg", "img/ours.jpg"];
var precedImg = "";
var click = 0;
var great = 0; var lose = 0;
var chron;
var chrono = document.getElementById("chrono");
var temps = 1; var secondes = 60;
var partieEnCours = true;
var ready = true;

function chronometre(){
	if(temps >= 0){
		secondes--;
		if(secondes >= 10)
			document.getElementById("chrono").innerHTML = temps+":"+secondes;
		else if(secondes < 10){
			document.getElementById("chrono").innerHTML = temps+":0"+secondes;
			if(secondes == 0){
				secondes = 60;
				temps--;
			}
		}
	}
	else{
			lose = 1;
			victoire();
			clearInterval(chron);
		}
}
function recommencer(victoire){
	var retry = confirm("Vous avez "+victoire+" !\n Recommencer ?");
	if(retry){
		var ZJeu = document.getElementsByClassName("carte");
		for(i = 0; i < ZJeu.length; i++){
			ZJeu[i].src = "img/dosCarte.jpg";
			ZJeu[i].setAttribute("onclick", "retourne("+(i+1)+", '"+(i+1)+"')");
		}
		great = 0; lose = 0;
		ready = true;
		partieEnCours = true;
		temps = 1; secondes = 60;
		document.getElementById("chrono").innerHTML = "2:00";
		shuffle(tab);
	}
	else{
		ready = false;
		great = 0; lose = 0;
	}
}

function victoire(){
	if(great == 6){
		clearInterval(chron);
		recommencer("gagné");
		
	}
	else if(lose == 1){
		ready = false;
		clearInterval(chron);
		recommencer("perdu");
	}
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
shuffle(tab);

function retourne(id, name){
	if(partieEnCours){
		chron = setInterval("chronometre()", 1000);
		partieEnCours = false
	}
	if(ready){
		name = document.getElementById(name);
	 	switch(id){
			case 1:
				name.src =tab[0];
				if(click == 0){
					precedImg = name;
					click = 1;
				}
				else{
					click = 2;
				}
				break; 		
			case 2:
				name.src =tab[1];
				if(click == 0){
					precedImg = name;
					click = 1;
				}
				else{
					click = 2;
				}
				break;
			case 3:
				name.src =tab[2];
				if(click == 0){
					precedImg = name;
					click = 1;
				}
				else{
					click = 2;
				}
				break;
			case 4:
				name.src =tab[3];
				if(click == 0){
					precedImg = name;
					click = 1;
				}
				else{
					click = 2;
				}
				break;
			case 5:
				name.src =tab[4];
				if(click == 0){
					precedImg = name;
					click = 1;
				}
				else{
					click = 2;
				}
				break;
			case 6:
				name.src =tab[5];
				if(click == 0){
					precedImg = name;
					click = 1;
				}
				else{
					click = 2;
				}
				break;
			case 7:
				name.src =tab[6];
				if(click == 0){
					precedImg = name;
					click = 1;
				}
				else{
					click = 2;
				}
				break;
			case 8:
				name.src =tab[7];
				if(click == 0){
					precedImg = name;
					click = 1;
				}
				else{
					click = 2;
				}
				break;
			case 9:
				name.src =tab[8];
				if(click == 0){
					precedImg = name;
					click = 1;
				}
				else{
					click = 2;
				}
				break;
			case 10:
				name.src =tab[9];
				if(click == 0){
					precedImg = name;
					click = 1;
				}
				else{
					click = 2;
				}
				break;
			case 11:
				name.src =tab[10];
				if(click == 0){
					precedImg = name;
					click = 1;
				}
				else{
					click = 2;
				}
				break;
			case 12:
				name.src =tab[11];
				if(click == 0){
					precedImg = name;
					click = 1;
				}
				else{
					click = 2;
				}
				break; 			
	 	}		
	 	if(name.src != precedImg.src && click == 2){
	 		ready = false;
			setTimeout(function(){
				name.src = "img/dosCarte.jpg";
				precedImg.src = "img/dosCarte.jpg";
				precedImg = "";
				click = 0;
				ready = true;
			}, 2000);	
		}
		else if(name.src == precedImg.src && click == 2){
			name.removeAttribute("onclick");
			precedImg.removeAttribute("onclick");
			click = 0;
			great++;
		}
	}
	victoire();
}

