const btnFitxer = document.getElementById('btnNouFitxer');

const btnName = document.getElementById('fitxerU');

const textMod = document.getElementById('textModificar');

btnFitxer.addEventListener('change', function(){
  if(this.files[0] == null){
    textMod.innerHTML = "Cap fitxer introduït";
  }
  else{
    textMod.innerHTML = "Fitxer introduït";
  }

})