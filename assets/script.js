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
let curentindex=0;

/* On liste le tableau pour le compter et créer les dots */
slides.forEach((valeur, index) => {
	/* On crée la dot du slide */
	//console.log("Valeur : "+valeur+" - Index : "+index);//////
	const dotDiv=document.querySelector(".dots");
	const dotLien=document.createElement("a");
	dotLien.href="javascript:slide("+index+");";
	dotLien.title="Slide "+index;

	const curentDotSpan=document.createElement("span");
	curentDotSpan.id="dotspan_"+index;
	curentDotSpan.classList.add("dot");
	
	// On allume la dot 0
	if(index==0) { curentDotSpan.classList.add("dot_selected"); }
	dotLien.appendChild(curentDotSpan);
	dotDiv.appendChild(dotLien);
});

//console.table(slides);//////

function slide(slideIndex) {
	//console.log("slideIndex : "+slideIndex);//////

	// On crée la boucle infinie du diaporama
	if(slideIndex < 0)
		{
		slideIndex=slides.length - 1;
		}
		else { if(slideIndex >= slides.length) { slideIndex=0; } }
			//console.log("slide() slideIndex : "+slideIndex+" - curentindex : "+curentindex);//////
	
	// On affecte les nouvelles valeurs image et tagline au slide
	const slideImg = document.querySelector(".banner-img");
	slideImg.src="./assets/images/slideshow/"+slides[slideIndex]["image"];
	const tagLine=document.querySelector("div#banner p");
	tagLine.innerHTML=slides[slideIndex]["tagLine"];
	
	// On éteins la dot du slide précedent
	const dotOff = document.querySelector("#dotspan_"+curentindex);
	dotOff.classList.remove("dot_selected");
	// On allume la dot concernée
	const dotSelected = document.querySelector("#dotspan_"+slideIndex);
	dotSelected.classList.add("dot_selected");

	// On actualise curentindex
	curentindex=slideIndex;
}// End function slide() //

window.onload = function() {
    //console.log("Page loaded!");//////

	// On lance les écouteurs 'évènements sur les flèches gauche et droite
	const arrowLeft=document.querySelector(".arrow_left");
	arrowLeft.alt="Précédent";
	arrowLeft.title="Précédent";
	arrowLeft.addEventListener('click', () => {slide(curentindex-1); });
	const arrowRight=document.querySelector(".arrow_right");
	arrowRight.alt="Suivant";
	arrowRight.title="Suivant";
	arrowRight.addEventListener('click', () => { slide(curentindex+1); });

	// On initialise le diaporama
	slide(0);

	// On lance le défilement auto
	let timerSlider=setInterval(function(){slide(curentindex+1);}, 7000);
};
