let form = document.querySelector('form');

form.onsubmit = (event) => {
  event.preventDefault();

  const submission = getFormData(event);
};

getFormData = (event) => {
  let submission = {};

  submission.name = form.elements.contactName.value;
  submission.email = form.elements.contactEmail.value;
  submission.message = form.elements.contactMessage.value;
  submission.number = form.elements.contactNumber.value;
  submission.time = '${event.timeStamp}';

  if (submission.name == '') {
    alert('Name must be filled out');
  } else if (submission.email == '') {
    alert('Email must be filled out');
  } else if (submission.number == '') {
    alert('Number must be filled out');
  } else if (submission.message == '') {
    alert('Contact Me must be filled out');
  }

  return submission;
};
