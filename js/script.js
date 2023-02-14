document.getElementById('btn-lgn').addEventListener('click', function () {
	const emailField = document.getElementById('user-email');
	const email = emailField.value;
	const passwordField = document.getElementById('user-password');
	const password = passwordField.value;

	if (email === 'nazmul@rabbi.com' && password === 'rabib') {
		window.location.href = 'bbank.html';
	} else {
		alert('sorry !! type  the currect password');
	}
});
