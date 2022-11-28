let form = document.querySelector('form');

form.onsubmit = (event) => {
  const submission = getFormData();
};

const getFormData = () => {
  let submission = {};

  submission.name = form.elements.contactName.value;
  submission.email = form.elements.contactEmail.value;
  submission.message = form.elements.contactMessage.value;
  submission.number = form.elements.contactNumber.value;

  if (submission.name == '') {
    alert('Name must be filled out');
  } else if (submission.email == '') {
    alert('Email must be filled out');
  } else if (submission.number == '') {
    alert('Phone number must be filled out');
  } else if (submission.number.length < 12) {
    alert('Phone number must be in the format xxx-xxx-xxxx');
  } else if (submission.message == '') {
    alert('Contact Me must be filled out');
  }
  return submission;
};
