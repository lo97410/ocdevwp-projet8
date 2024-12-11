const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* Slides des images et textes */

var maxIndex=0;
var curentIndex=-1;
var action="";
var slideValue=0;
var i;

/* On liste le tableau pour le compter et créer les dots */
slides.forEach((valeur, index) => {
	//console.log("Valeur : "+valeur.image+" - "+valeur.tagLine+" / Index : "+index);//////
	let thisImage=valeur.image;
	let thistagLine=valeur.tagLine;
	let thisIndex=index;
	maxIndex=index;
	//console.log("MaxIndex : "+maxIndex);//////

	/* On crée la dot du slide */
	var dotDiv=document.getElementById("dotsid");
	var dotLien=document.createElement("a");
	dotLien.href="javascript:slide("+thisIndex+");";
	dotLien.title="Slide "+index;

	var curentDotSpan=document.createElement("span");
	curentDotSpan.id="dotspan_"+index;
	curentDotSpan.classList.add("dot");

	dotLien.appendChild(curentDotSpan);
	dotDiv.appendChild(dotLien);
});

//console.table(slides);//////
//console.table(slides[0]);//////
//console.table(slides[0]['image']);//////

function slide(action) {
	
	console.log("Action : "+action);//////

	if(action == "slide_precedent") {
		curentIndex=curentIndex-1;
		/* Controle de la valeur min de curentIndex */
		if(curentIndex<0)
				{
					curentIndex=maxIndex;
				}
		let slideImage=document.getElementById("img_slideshow");
		let slideTagLine=document.getElementById("tagline");
		var goImage="./assets/images/slideshow/"+slides[curentIndex]['image'];
		var goTagLine=slides[curentIndex]['tagLine'];
		slideImage.src=goImage;
		slideTagLine.innerHTML=goTagLine;
		
		console.log("goImage : "+goImage+" - goTagLine : "+goTagLine+" - curentIndex : "+curentIndex+" - Action : "+action);//////

		/* Gestion des dots */
		/* On éteint toutes les dots */
		for(i=0; i<=maxIndex; i++)
			{
			let previousDotSelected=document.getElementById("dotspan_"+i);
			previousDotSelected.classList.remove("dot_selected");
			//previousDotSelected.style.background="none";
			}
		let curentDotSelected=document.getElementById("dotspan_"+curentIndex);
		curentDotSelected.classList.add("dot_selected");
		//curentDotSelected.style.background="white";
		//console.log("Puce "+curentIndex+" allumée");//////
	}
	else {
		if(action == "slide_suivant") {
			curentIndex=curentIndex+1;
			/* Controle de la valeur max de curentIndex */
			if(curentIndex>maxIndex)
					{
						curentIndex=0;
					}
			let slideImage=document.getElementById("img_slideshow");
			let slideTagLine=document.getElementById("tagline");
			console.log("slideTagLine : "+slideTagLine);//////
			var goImage="./assets/images/slideshow/"+slides[curentIndex]['image'];
			var goTagLine=slides[curentIndex]['tagLine'];
			//console.log("slides[curentIndex]['image'] : "+slides[curentIndex]['image']+" -*- goTagLine : "+goTagLine);//////
			slideImage.src=goImage;
			slideTagLine.innerHTML=goTagLine;
			//console.log("goImage : "+goImage+" - goTagLine : "+goTagLine+" - curentIndex : "+curentIndex+" - Action : "+action);//////
			
			/* Gestion des dots */
			/* On éteint toutes les dots */
			for(i=0; i<=maxIndex; i++)
				{
				let previousDotSelected=document.getElementById("dotspan_"+i);
				previousDotSelected.classList.remove("dot_selected");
				//previousDotSelected.style.background="none";
				}
			let curentDotSelected=document.getElementById("dotspan_"+curentIndex);
			curentDotSelected.classList.add("dot_selected");
			//curentDotSelected.style.background="white";
			//console.log("Puce "+curentIndex+" allumée");//////
			}
			else {
					if(Number.isInteger(action))
						{
							curentIndex=action;
							let slideImage=document.getElementById("img_slideshow");
							let slideTagLine=document.getElementById("tagline");
							//console.log("slideTagLine : "+slideTagLine);//////
							var goImage="./assets/images/slideshow/"+slides[curentIndex]['image'];
							var goTagLine=slides[curentIndex]['tagLine'];
							//console.log("slides[curentIndex]['image'] : "+slides[curentIndex]['image']+" -*- goTagLine : "+goTagLine);//////
							slideImage.src=goImage;
							slideTagLine.innerHTML=goTagLine;
							//console.log("goImage : "+goImage+" - goTagLine : "+goTagLine+" - curentIndex : "+curentIndex+" - Action : "+action);//////
							
							/* Gestion des dots */
							/* On éteint toutes les dots */
							for(i=0; i<=maxIndex; i++)
								{
								let previousDotSelected=document.getElementById("dotspan_"+i);
								previousDotSelected.classList.remove("dot_selected");
								//previousDotSelected.style.background="none";
								}
							let curentDotSelected=document.getElementById("dotspan_"+curentIndex);
							curentDotSelected.classList.add("dot_selected");
							//curentDotSelected.style.background="white";
							//console.log("Puce "+curentIndex+" allumée");//////
						}
				}
			}

	/* On lance le défilement si inactif */
	
	if(slideValue==0)
			{
				slideValue=1;
				let timerSlider=setInterval(function(){slide('slide_suivant');}, 7000);
			}

}/* End function slide() */

window.onload = function() {
    //console.log("Page loaded!");//////

	let arrowLeft=document.getElementById("slide_precedent");
	arrowLeft.addEventListener('click', slide("slide_precedent"));
	let arrowRight=document.getElementById("slide_suivant");
	arrowLeft.addEventListener('click', slide("slide_suivant"));

	slide(0);

};
