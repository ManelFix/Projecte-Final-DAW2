var actualBtn = document.getElementById('iFitxer');

var fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  if(this.files[0] == null){
    fileChosen.textContent = "Cap fitxer introduït";
  }
  else{
    fileChosen.textContent = "Fitxer introduït";
  }

});
