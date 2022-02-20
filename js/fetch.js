
//  const table = document.querySelector('table')
 const tr = document.getElementById('users');
 const totalStaffs = document.getElementById('all-staffs');

 const list = document.createDocumentFragment();
 const url = 'http://localhost:5000/api/v1/users/get/global/allUser';


 var state = {
  'querySet': '',

  'page': 1,
  'rows': 8,
  'window': 5,
}


var tableData = []





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
    tableData = data.data
    totalStaffs.innerText= `${data.data.length} Users `
    displayAllUsers(data.data)
    
    console.log(tableData, 'ttttttttttt')
  })
  .catch((error) => console.error("FETCH ERROR:", error));


 
  
  console.log(tableData, 'yiiu')


function pagination(querySet, page, rows) {

    console.log(querySet, 'djsjkkjsyyy')

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows

    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.round(querySet.length / rows);

    return {
        'querySet': trimmedData,
        'pages': pages,
    }
}




//Pagination Buttons
function pageButtons(pages) {

 
  var wrapper = document.getElementById('pagination-wrapper')

  wrapper.innerHTML = ``
  console.log('Pages:', pages)

  var maxLeft = (state.page - Math.floor(state.window / 2))
  var maxRight = (state.page + Math.floor(state.window / 2))

  if (maxLeft < 1) {
      maxLeft = 1
      maxRight = state.window
  }

  if (maxRight > pages) {
      maxLeft = pages - (state.window - 1)
      
      if (maxLeft < 1){
        maxLeft = 1
      }
      maxRight = pages
  }
  
  

  for (var page = maxLeft; page <= maxRight; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
  }

  if (state.page != 1) {
      wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
  }

  if (state.page != pages) {
      wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
  }

  $('.page').on('click', function() {
      $('#table-body').empty()

      state.page = Number($(this).val())

      //bull flag, requires data
      displayAllUsers()
  })

}

console.log(state.page, 'pageeeueee')


  async function displayAllUsers(data) {
    let allUsers = await data;
    // totalStaffs.innerText= `${allUsers.length} Users `
    console.log(allUsers, 'dskssjks')



    console.log(state.page, 'pageeeeee')

    var data = pagination(tableData, state.page, state.rows)
    var myList = data.querySet

    console.log(myList, 'sjjasuaskjaa')


    // const tableBody = table.querySelector('tbody')

    // const rowElement =document.createElement('tr');
    //   rowElement.classList.add("active-row");

    var tableBody = $('#table-body')
    for(var i = 0; i < myList.length; i++){

      
      var row = `<tr class='active-row' >
                <td>${myList.indexOf(myList[i])}</td>
                <td>${myList[i].id}</td>
                <td>${myList[i].email}</td>
                <td>${myList[i].first_name}</td>
                <td>${myList[i].last_name}</td>
                <td>${myList[i].company}</td>
               
      
      
                </tr>`

      tableBody.append(row)
      // table.innerHTML += row


    }

    pageButtons(data.pages)

  }   