var a = "";
var b = "";
function ColorChosen(colorChosenUser){
  a = colorChosenUser.textContent;
  sampleList = document.getElementsByName('KitType');
  for (var x =0; x < sampleList.length;x++){
    sampleList[x].className = '';
  }
  document.getElementById(colorChosenUser.id).className = 'btn btn-success';

}

function SizeChosen(sizeChosenUser){
  b = sizeChosenUser.textContent;
  document.getElementById("dropdownButtonSize").textContent = b;
}

function AddToCartFn(){
  if (a.length != 0 && b.length != 0){
    alert(a);
  }
}
