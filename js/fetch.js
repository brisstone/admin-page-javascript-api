
 const table = document.querySelector('table')
 const tr = document.getElementById('users');
 const list = document.createDocumentFragment();
 const url = 'http://localhost:5000/api/v1/users/get/global/allUser';


fetch(url)
  .then((response) => {
    if (response.ok) {

        console.log(response, 'ksssuussjj')
      return response.json();

    } else {
        console.log(err, 'jusuksguuuuuuuuuuuuuuu')
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayAllUsers(data.data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));


  async function displayAllUsers(data) {
    let allUsers = await data;
    console.log(allUsers, 'dskssjks')
    const tableBody = table.querySelector('tbody')

    // const rowElement =document.createElement('tr');
    //   rowElement.classList.add("active-row");


    for(var i = 0; i < allUsers.length; i++){

      
      var row = `<tr class='active-row' >
                <td>${allUsers[i].email}</td>
                <td>${allUsers[i].first_name}</td>
                <td>${allUsers[i].last_name}</td>
                <td>${allUsers[i].company}</td>
               
      
      
                </tr>`
      table.innerHTML += row


    }

      

      // for (const user of allUsers){
        // console.log(company)


    
        // const rowElement =document.createElement('tr');
        // rowElement.classList.add("active-row");

      




        // const bodyElement = document.createElement('td')
        // const Elementfirst_name = document.createElement('td')
        // const Elementlast_name = document.createElement('td')
        // const Elementcompany = document.createElement('td')

        // bodyElement.textContent = user.email
        // Elementfirst_name.textContent = user.first_name
        // Elementlast_name.textContent = user.last_name
        // Elementcompany.textContent = user.company

        // rowElement.appendChild(bodyElement)
        // rowElement.appendChild(Elementfirst_name)
        // rowElement.appendChild(Elementlast_name)
        // rowElement.appendChild(Elementcompany)

        // tableBody.appendChild(rowElement)
   
  
      // }
  }   