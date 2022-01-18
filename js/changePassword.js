const baseurl = 'http://localhost:5000/api/v1';
// var username = document.getElementById("username").textContent;
const form = document.querySelector(".changePasswordForm");

let formData = {
    email: document.querySelector("#username"),
    password: document.querySelector("#password"),
                
}




form.addEventListener("submit", async (e) => {
    e.preventDefault();



    console.log('jjjjj')

    
 


    await fetch(`${baseurl}/admin/${formData.email.value}/forgot-password`, {
		method: "POST",
		headers: {
		  Accept: "application/json, text/plain, */*",
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({
		  email: formData.email.value,
		
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


})