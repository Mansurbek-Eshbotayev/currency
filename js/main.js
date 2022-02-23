
var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormSelect = document.querySelector(".form__select");
var elFormResult = document.querySelector(".form__result");



elForm.addEventListener("submit" , function(event){

  event.preventDefault();

  var elInputVal = (elFormInput.value);
  var elSelectVal = (elFormSelect.value);
  var result = elInputVal * elSelectVal;

  elFormResult.textContent = (`${result}`)

})