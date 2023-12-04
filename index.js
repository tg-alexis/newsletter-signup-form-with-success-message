document.getElementById('email').addEventListener('input', function () {
	var emailInput = this;
	var errorSpan = document.getElementsByClassName('email_error')[0];

	if (emailInput.validity.valid) {
		errorSpan.style.display = 'none';
	} else {
		errorSpan.style.display = 'inline-block';
	}
});

document
	.getElementById('newsletter_form')
	.addEventListener('submit', function (event) {
		event.preventDefault();
		var formData = new FormData(event.target);
		var email = formData.get('email');
		var newsletter_box =
			document.getElementsByClassName('newsletter_box')[0];
		newsletter_box.style.display = 'none';
		var success_paragraph = document.getElementById('success_content');
		success_paragraph.innerHTML =
			'A confirmation email has been sent to <strong>' +
			email +
			'</strong>. Please open it and click the button inside to confirm your subscription.';
		var newsletter_success =
			document.getElementsByClassName('success_box')[0];
		newsletter_success.style.display = 'inline-flex';
		document.getElementById('newsletter_form').reset();
	});

document.getElementById('success_button').onclick = function (event) {
	event.preventDefault();
	var newsletter_success = document.getElementsByClassName('success_box')[0];
	newsletter_success.style.display = 'none';
	var newsletter_box = document.getElementsByClassName('newsletter_box')[0];
	newsletter_box.style.display = 'inline-flex';
};
