const formRegisterElement = document.querySelector('form.form-auth');
// const formName = document.getElementsByName('name');
formRegisterElement.onsubmit = (event) => {
  event.preventDefault();
  const inputs = [...formRegisterElement];
  inputs.forEach(input => {
    if(!input.value.trim().length){
      input.insertAdjascentHTML('afterend','<span>Campo vazio!</span>');
      alert(`Digite o ${input.name}!`);
    }
  })
}
