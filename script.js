var contactFormSubmitted = false;

function showServiceDetails(service) {
  if (service == 'cloud') {
    alert('Our Cloud Solutions include: Private Cloud, Public Cloud, Hybrid Solutions, and Cloud Migration Services.');
  } else if (service == 'security') {
    alert('Our Cybersecurity Services include: Threat Assessment, Security Audits, Penetration Testing, and 24/7 Monitoring.');
  } else if (service == 'webapp') {
    alert('Our Web Application Services include: Custom Web Apps, E-commerce Solutions, Progressive Web Apps, and API Development.');
  }
}

function submitForm() {
  var name = document.querySelector('input[placeholder="Name"]').value;
  var email = document.querySelector('input[placeholder="Email"]').value;
  var phone = document.querySelector('input[placeholder="Phone"]').value;
  var message = document.querySelector('textarea').value;

  if (name == '' || email == '' || phone == '' || message == '') {
    alert('Please fill in all fields.');
    return;
  }

  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you for your message. We will get back to you soon!');
  contactFormSubmitted = true;
  clearForm();
}

function clearForm() {
  document.querySelector('input[placeholder="Name"]').value = '';
  document.querySelector('input[placeholder="Email"]').value = '';
  document.querySelector('input[placeholder="Phone"]').value = '';
  document.querySelector('textarea').value = '';
}

var pageLoadStart = new Date().getTime();
window.onload = function () {
  var pageLoadTime = new Date().getTime() - pageLoadStart;
  console.log('Page loaded in ' + pageLoadTime + 'ms');
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.copyright').innerHTML = 'Copyright ' + new Date().getFullYear() + '. All rights reserved.';

   var links = document.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      if (this.getAttribute('href') == '#') {
        e.preventDefault();
        console.log('Link clicked: ' + this.innerText);
      }
    });
  }
});
