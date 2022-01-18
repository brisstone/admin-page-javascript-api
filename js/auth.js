class Auth {
	constructor() {
        document.querySelector("body").style.display = "none";
		const auth = localStorage.getItem("auth");
		this.validateAuth(auth);
	}

	validateAuth(auth) {
		if (auth != 1) {
			window.location.replace("/");
		} else {
            document.querySelector("body").style.display = "block";
		}
	}

	logOut() {
		console.log('yayya')
		localStorage.removeItem("auth");
		window.location.replace("./index.html");
		// window.location.replace("./Pages/logout.html");
	}
}


// export default Auth 
