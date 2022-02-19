const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//account validation
const username = 'demo';
const password = 'demo';
signInButton.addEventListener('click', function(){
	
	const emailInput = document.getElementById('email').value;
	const passwordInput = document.getElementById('password').value;
	if (emailInput == username && passwordInput == password) {
		location.href ='post.html'
	} else {
		alert('your username or password is incorrect. please use "demo" as your username and password')
	}
	
})