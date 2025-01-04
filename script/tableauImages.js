//Emplacement ou sera affichée l'image
var affichage = document.getElementById('affichage');
affichage.style.display = 'none';
//On récupère les liens
var tableauImages = document.getElementById('tableauImages');
var lienImages = tableauImages.getElementsByTagName('a');


for (var i = 0; i < lienImages.length; i++){
  lienImages[i].onclick = (function(arg){
    return function(){
      affichage.firstElementChild.src = lienImages[arg].href;
      affichage.style.display = '';
      return false;
    };
  })(i);
}

/*
lienImages[0].onclick = function(){
  affichage.firstElementChild.src = lienImages[0].href;
  affichage.style.display = '';
  return false;
};*/

affichage.onclick = function(){
  affichage.style.display = 'none';
  return false;
}
