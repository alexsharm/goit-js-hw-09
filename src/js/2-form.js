const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const emailInput = form.elements.email;
const textInput = form.elements.message;

if (localStorage.getItem(localStorageKey) != null) {
  emailInput.value =
    JSON.parse(localStorage.getItem(localStorageKey)).email ?? '';

  textInput.value =
    JSON.parse(localStorage.getItem(localStorageKey)).message ?? '';
}
form.addEventListener('input', handleInput);

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  if (
    evt.target.elements.email.value.trim() != '' &&
    evt.target.elements.message.value.trim() != ''
  ) {
    const dataObject = {
      email: evt.target.elements.email.value.trim(),
      message: evt.target.elements.message.value.trim(),
    };
    console.log(dataObject);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Заповніть усі поля форми :3');
  }
}

function handleInput(evt) {
  const formInform = {
    email: evt.currentTarget.elements.email.value.trim(),
    message: evt.currentTarget.elements.message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formInform));
}
