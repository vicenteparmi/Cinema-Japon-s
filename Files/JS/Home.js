
var audio = new Audio('Media/music.mp3');
var audioClick = new Audio('Media/click.ogg');
audio.play();


function startWebsite() {
	document.getElementById("body").className = 'hide';
	document.getElementById("body2").className = 'hide';
	window.setTimeout(startWebsite2(), 1200);
	audioClick.play();
}
function startWebsite2() {
	document.getElementById("body2").className = '';
	document.getElementById("B").style.backgroundImage = "url('Media/Background%20Image1.jpg')"
	document.getElementById("frontImage").style.backgroundImage = "url('Media/Background%20Image1f.jpg')"
	
}

function seeCard(Cnumber) {
	audioClick.play();
	switch (Cnumber) {
		case 0:
			document.getElementById("body2").className = 'hide';
			document.getElementById("body3").className = '';
			document.getElementById("B").style.backgroundImage = "url('Media/Background%20Image2.jpg')"
			document.getElementById("backB").className = 'show';
			document.getElementById("frontImage").style.backgroundImage = "url('')"
			break;
		case 1:
			document.getElementById("body2").className = 'hide';
			document.getElementById("body4").className = '';
			document.getElementById("B").style.backgroundImage = "url('Media/Background%20Image3.jpg')"
			document.getElementById("backB").className = 'show';
			document.getElementById("frontImage").style.backgroundImage = "url('')"
			break;
		case 2:
			document.getElementById("body2").className = 'hide';
			document.getElementById("body5").className = '';
			document.getElementById("TXTBox1").className = 'TXTBox';
			document.getElementById("B").style.backgroundImage = "url('Media/Background%20Image4.jpg')"
			document.getElementById("backB").className = 'show';
			document.getElementById("frontImage").style.backgroundImage = "url('Media/Background%20Image4f.png')"
			break;
		case 3:
			document.getElementById("body2").className = 'hide';
			document.getElementById("body6").className = '';
			document.getElementById("B").style.backgroundImage = "url('Media/Background%20Image5.jpg')"
			document.getElementById("backB").className = 'show';
			document.getElementById("frontImage").style.backgroundImage = "url('Media/Background%20Image5f.png')"
			document.getElementById("frontImage").style.visibility = "hidden"
			break;
		case 4:
			document.getElementById("body2").className = 'hide';
			document.getElementById("body7").className = '';
			document.getElementById("B").style.backgroundImage = "url('Media/Background%20Image6.jpg')"
			document.getElementById("backB").className = 'show';
			document.getElementById("frontImage").style.backgroundImage = "url('')"
			break;
		case 5:
			document.getElementById("body2").className = 'hide';
			document.getElementById("body8").className = '';
			document.getElementById("B").style.backgroundImage = "url('Media/Background%20Image7.jpg')"
			document.getElementById("backB").className = 'show';
			document.getElementById("frontImage").style.backgroundImage = "url('')"
			document.getElementById("frontImage").style.visibility = "hidden"
			break;
		case 'end':
			document.getElementById("body2").className = 'hide';
			document.getElementById("credits").className = '';
			document.getElementById("B").style.backgroundImage = "url('Media/Background%20Image.jpg')"
			document.getElementById("backB").className = 'show';
			document.getElementById("frontImage").style.backgroundImage = "url('')"
			document.getElementById("frontImage").style.visibility = "hidden"
			document.getElementById("credits_roll").className = "play";
			break;
	}
	
}

function Breturn() {
	document.getElementById("body2").className = '';
	document.getElementById("body3").className = 'hide';
	document.getElementById("body4").className = 'hide';
	document.getElementById("body5").className = 'hide';
	document.getElementById("body6").className = 'hide';
	document.getElementById("body7").className = 'hide';
	document.getElementById("body8").className = 'hide';
	document.getElementById("credits").className = 'hide';
	document.getElementById("B").style.backgroundImage = "url('Media/Background%20Image1.jpg')"
	document.getElementById("backB").className = 'hide';
	document.getElementById("TXTBox1").className = 'hide TXTBox';
	document.getElementById("frontImage").style.backgroundImage = "url('Media/Background%20Image1f.jpg')"
	document.getElementById("frontImage").style.visibility = "visible";
	audioClick.play();
	document.getElementById("credits_roll").className = "pause";
}

var audioMu = 0;

function audioM() {
	if (audioMu == 0) {
		document.getElementById("mute").className = "show";
		audioMu = 1;
	} else {
		document.getElementById("mute").className = "hide";
		audioMu = 0;
	}
}

var audioMS = 0;

function audioMute() {
	if (audioMS == 0) {
		audio.pause();
		audioMS = 1;
		document.getElementById('mudo45').src = "Media/Icons/ic_volume_off_white_24dp_2x.png";
	} else {
		audio.play();
		audioMS = 0;
		document.getElementById('mudo45').src = "Media/Icons/ic_volume_up_white_24dp_2x.png";
	}
}


function hideFront() {
		var timeOut = setTimeout('showFront()', 3000);
		document.getElementById("frontImage").style.webkitFilter = "opacity(0%)";
		document.getElementById("frontImage").style.visibility = "hidden";
}
function showFront() {
	document.getElementById("frontImage").style.visibility = "visible";
	document.getElementById("frontImage").style.webkitFilter = "opacity(100%)";
}

var OLDvalue = 0;
function pos(value) {
	if (OLDvalue > 0 || OLDvalue < 5) {
		value = OLDvalue + value;
	}
	
	OLDvalue = value;
	
	switch (value) {
		case 0:
		 document.getElementById("imgfilm").style.marginLeft = "10%";
		 document.getElementById("filmName").innerHTML = "Tokyo Story";
		 break;
		case 1:
		 document.getElementById("imgfilm").style.marginLeft = "-40%";
		 document.getElementById("filmName").innerHTML = "Ohayo (Bom Dia)";
		 break;
		case 2:
		 document.getElementById("imgfilm").style.marginLeft = "-95%";
		 document.getElementById("filmName").innerHTML = "O Castelo no C\u00E9u";
		 break;
		case 3:
		 document.getElementById("imgfilm").style.marginLeft = "-150%";
		 document.getElementById("filmName").innerHTML = "Os Sete Samurais";
		 break;
		case 4:
		 document.getElementById("imgfilm").style.marginLeft = "-210%";
		 document.getElementById("filmName").innerHTML = "O Castelo Animado";
		 break;
		case 5:
		 document.getElementById("imgfilm").style.marginLeft = "10%";
		 document.getElementById("filmName").innerHTML = "Tokyo Story";
		 OLDvalue = 0;
		 value = 0;
		 break;
		case -1:
		 document.getElementById("imgfilm").style.marginLeft = "-210%";
		 document.getElementById("filmName").innerHTML = "O Castelo Animado";
		 OLDvalue = 4;
		 value = 4;
		 break;
	}

}