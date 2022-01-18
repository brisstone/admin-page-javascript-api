const baseurl = 'http://localhost:5000/api/v1';
var username = document.getElementById("username").textContent;
var password = document.getElementById("password").textContent;
// const form = document.querySelector('form');


// const form = {
// 	email: document.querySelector("#signin-email"),
// 	password: document.querySelector("#signin-password"),
// 	submit: document.querySelector("#signin-btn-submit"),
// 	messages: document.getElementById("form-messages"),
//   };


class Login {
	constructor(form, fields) {
		this.form = form;
		this.fields = fields;
		this.validateonSubmit();
	}

		async validateonSubmit() {
		let self = this;

		this.form.addEventListener("submit", (e) => {
			e.preventDefault();
			var error = 0;
			self.fields.forEach((field) => {
				const input = document.querySelector(`#${field}`);
				if (self.validateFields(input) == false) {
					error++;
				}
			});
			if (error == 0) {
				//do login api here

				console.log(this.form, 'pooooooooooiiiii')

				submitFetch(this.form)
			
				// let data = {
				// 	username: username,
				// 	password: password, 
				// 	userId:1
				//   }
				
				//   console.log('hhhhhhhhrrrrrrrtt')
				//   const rawResponse = fetch(`${baseurl}/users/global-adm/login`, {
				// 	method: 'POST',
				// 	headers: {
				// 	  'Accept': 'application/json',
				// 	  'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify({data: data})
				//   });

				// //   const content = rawResponse.json();
				
				//   console.log(rawResponse);


				localStorage.setItem("auth", 1);
				// this.form.submit();
			}
		});
	}

	validateFields(field) {
		if (field.value.trim() === "") {
			this.setStatus(
				field,
				`${field.previousElementSibling.innerText} cannot be blank`,
				"error"
			);
			return false;
		} else {
			if (field.type == "password") {
				if (field.value.length < 6) {
					this.setStatus(
						field,
						`${field.previousElementSibling.innerText} must be at least 8 characters`,
						"error"
					);
					return false;
				} else {
					this.setStatus(field, null, "success");
					return true;
				}
			} else {
				this.setStatus(field, null, "success");
				return true;
			}
		}
	}

	setStatus(field, message, status) {
		const errorMessage = field.parentElement.querySelector(".error-message");

		if (status == "success") {
			if (errorMessage) {
				errorMessage.innerText = "";
			}
			field.classList.remove("input-error");
		}

		if (status == "error") {
			errorMessage.innerText = message;
			field.classList.add("input-error");
		}
	}
}

const form = document.querySelector(".loginForm");
if (form) {
	const fields = ["username", "password"];
	const validator = new Login(form, fields);
}


const submitFetch = async()=>{

	let formData = {
		email: document.querySelector("#username"),
		password: document.querySelector("#password"),
					
		}

	// const response = await fetch(`${baseurl}/users/global-adm/login`, {
	// 	method: 'POST',
	// 	body: data
	//   })

	// console.log(response, 'kkkkkk')




	await fetch(`${baseurl}/users/global-adm/login`, {
		method: "POST",
		headers: {
		  Accept: "application/json, text/plain, */*",
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({
		  email: formData.email.value,
		  password: formData.password.value,
		}),
	  })
		.then((response) => response.json())
		.then((data) => {
		  console.log(data, 'fffffffffffffff');


		//   this.setStatus(
		// 	field,
		// 	`${field.previousElementSibling.innerText} cannot be blank`,
		// 	"error"
		// );
		
		//   code here //
		  if (data.message) {
			alert(data.message); /*displays error message*/
		  } else if(data.success) {

			localStorage.setItem("user", data.success);
			window.open(
			  "./dashboard.html"
			); /*opens the target page while Id & password matches*/
		  }
		})
		.catch((err) => {
			console.log(err.response);
		  console.log(err);
		});


}
