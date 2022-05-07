var ImgSource = [
    'img/amare.png',
    'img/amare1.png',
    'img/arrabbiato.png',
    'img/piangere.png',
    'img/bello.png',
    'img/ridere.png',
    'img/shock.png',
    'img/spavento.png',          
];
var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;
var Source = "#boxcard";


function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}
	
function ShuffleImages() {
	var ImgAll = $(Source).children();
	var ImgThis = $(Source + " div:first-child");
	var ImgArr = new Array();

	for (var i = 0; i < ImgAll.length; i++) {
		ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
		ImgThis = ImgThis.next();
	}
	
		ImgThis = $(Source + " div:first-child");
	
	for (var z = 0; z < ImgAll.length; z++) {
	var RandomNumber = RandomFunction(0, ImgArr.length - 1);

		$("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
		ImgArr.splice(RandomNumber, 1);
		ImgThis = ImgThis.next();
	}
}

function ResetGame() {
	ShuffleImages();
	$(Source + " div img").hide();
	$(Source + " div").css("visibility", "visible");
	Counter = 0;
	$("#success").remove();
	$("#counter").html("" + Counter);
	BoxOpened = "";
	ImgOpened = "";
	ImgFound = 0;
	return false;
}

function OpenCard() {
	var id = $(this).attr("id");

	if ($("#" + id + " img").is(":hidden")) {
		$(Source + " div").unbind("click", OpenCard);
	
		$("#" + id + " img").slideDown('fast');

		if (ImgOpened == "") {
			BoxOpened = id;
			ImgOpened = $("#" + id + " img").attr("src");
			setTimeout(function() {
				$(Source + " div").bind("click", OpenCard)
			}, 300);
		} else {
			CurrentOpened = $("#" + id + " img").attr("src");
			if (ImgOpened != CurrentOpened) {
				setTimeout(function() {
					$("#" + id + " img").slideUp('fast');
					$("#" + BoxOpened + " img").slideUp('fast');
					BoxOpened = "";
					ImgOpened = "";
				}, 400);
			} else {
				$("#" + id + " img").parent().css("visibility", "hidden");
				$("#" + BoxOpened + " img").parent().css("visibility", "hidden");
				ImgFound++;
				BoxOpened = "";
				ImgOpened = "";
			}
			setTimeout(function() {
				$(Source + " div").bind("click", OpenCard)
			}, 400);
		}
		Counter++;
		$("#counter").html("" + Counter);

		if (ImgFound == ImgSource.length) {
			$("#counter").prepend('<span id="success">Hai vinto </span>');
		}
	}
}

$(function() {

for (var y = 1; y < 3 ; y++) {
	$.each(ImgSource, function(i, val) {
		$(Source).append("<div id=card" + y + i + "><img src=" + val + " />");
	});
}
	$(Source + " div").click(OpenCard);
	ShuffleImages();
});

// creo una variabile che mi contiene le immagini cliccate

// quando il documento è pronto...vado a selezionare casualmente una immagine dalla cartella.

    // creo una variabile "images" che contiene il selettore della classe "images". 
    // così ho un oggetto jQuery e metto gli elementi corrispondenti nell'oggetto jQuery.

    // creo un ciclo for sull'oggetto creato per ottenere poi un'immagine random.

        // prendo a caso un elemento dalla mia lista.

        // vado a prendere il file localizzato nella directory img e creo il tag html e lo inserisco nella pagina.
        //images.eq(e).html("<img id='" + e + "' src='images/" + randomImg + ".png' width='130' height='130' />");
  
 // creo la funzione principale "mostraImg"

    // creo l'oggetto jQuery per i clicks e lo chiamo "tuttiIClick" e prendo il valore e poi incremento.
    
    // ora visualizzo l'emoji (l'immagine) a due a due se sono diverse le nascondo altrimenti le lascio visibili.
    
        // se non sono due visualizzo l'emoji e la inserisco in "clickImgs".
        
            // se sono uguali azzero la mia lista.
            
                // se sono diverse nascondo le due immagini. 