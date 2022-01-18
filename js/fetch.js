
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



  
  

    //clear the table first, in case of page refresh on data
    // tableBody.innerHTML = '<tr><tr>'

    


    // allUsers.map(item => `<tr><td>${item.email}</td><td>${item.company}</td></tr>`)

    // allUsers.map(function(user) {
    //     // let tdName = document.createElement('td');
    //     // let tdCompany = document.createElement('td');
    //     // let name = document.createElement('h2');
    //     // let email = document.createElement('span');

    //     // const tableBody = table.querySelector('tbody')
    //     // //clear the table first, in case of page refresh on data
    //     // tableBody.innerHTML = '<tr><tr>'

    //     // name.innerHTML = `${user.email}`;
    //     // email.innerHTML = `${user.company}`;

    //     console.log(user, 'kdkdkkd')
    //     const bodyElement = document.createElement('td')
    //     bodyElement.textContent = user
    //     rowElement.appendChild(bodyElement)


    //     // td.appendChild(tdName);
    //     // td.appendChild(tdCompany);
    //     // list.appendChild(td);
    //   });

      // tr.appendChild(list);


      // const rowElement =document.createElement('tr');


      

      for (const user of allUsers){
        // console.log(company)
        const rowElement =document.createElement('tr');
        rowElement.classList.add("active-row");

        // const first_name =document.createElement('tr');
        // const last_name =document.createElement('tr');
        // const company =document.createElement('tr');




        const bodyElement = document.createElement('td')
        const Elementfirst_name = document.createElement('td')
        const Elementlast_name = document.createElement('td')
        const Elementcompany = document.createElement('td')

        bodyElement.textContent = user.email
        Elementfirst_name.textContent = user.first_name
        Elementlast_name.textContent = user.last_name
        Elementcompany.textContent = user.company

        rowElement.appendChild(bodyElement)
        rowElement.appendChild(Elementfirst_name)
        rowElement.appendChild(Elementlast_name)
        rowElement.appendChild(Elementcompany)

        tableBody.appendChild(rowElement)
        // tableBody.appendChild(first_name)
        // tableBody.appendChild(last_name)
        // tableBody.appendChild(company)


////////////////////////////////////////////////////////////////
        // const rowElement =document.createElement('tr');
        // for (var colIndex = 0; colIndex < user.length; colIndex++)
        // {

          
        //     var val = user[i][cols[colIndex]];
        //     console.log(user[i], 'kskkss')
        //     // If there is any key, which is matching
        //     // with the column name
        //     if (val == null) val = ""; 
        //     rowElement.append($('<td/>').html(val));
        //     tableBody.appendChild(rowElement)

        // }
////////////////////////////////////////////////////////////
        // const rowElementData = document.createElement('td')
        // rowElementData.innerText = user.email
        // rowElement.appendChild(rowElementData)
        // tableBody.appendChild(rowElement)



        // const bodyElementCompany = document.createElement('td')
        // bodyElementCompany.textContent = user.company
        // rowElement.appendChild(bodyElementCompany)
        

      //   for (const cellText of company){

          
      //   const bodyElement = document.createElement('td')
      //   bodyElement.textContent = cellText
      //   rowElement.appendChild(bodyElement)

      //   }

      // }
  
      }
  }   