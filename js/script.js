
var btnsend = document.getElementById('btnsend');
btnsend.addEventListener('click', function (e) {
	e.preventDefault()
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;
	var body = 'jmeno: ' + name + '<br />email: ' + email + '<br />predmet: ' + subject + '<br />zprava: ' + message;

	Email.send({
		SecureToken: "ac02ab13-3a97-4bc8-9648-bf959b5119ae",
		To: 'rez.m@email.cz',
		From: "reznickova.mart@gmail.com",
		Subject: "Kontaktujte mì zpráva",
		Body: body
	}).then(
		message => alert(message)
	);

})


function scrollToSection(sectionId) {
	var section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
}

