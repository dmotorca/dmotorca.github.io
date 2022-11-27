let form = document.querySelector('form');

form.onsubmit = (event) => {
  event.preventDefault();

  const submission = getFormData();
};

getFormData = () => {
  let submission = {};
  submission.name = form.elements.contactName.value;
  submission.email = form.elements.contactEmail.value;
  submission.message = form.elements.contactMessage.value;

  if (submission.name == '') {
    alert('Name must be filled out');
  } else if (submission.email == '' && submission.name == '') {
    alert('Name and email must be filled out');
  }

  return submission;
};
