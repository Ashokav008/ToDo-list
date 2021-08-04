function addAndUpdateItem() {

    titleValue = document.getElementById('title').value;
    descriptionValue = document.getElementById('description').value;

    if (localStorage.getItem('localJson') == null) {
        jsonArray = [];
        jsonArray.push([titleValue, descriptionValue]);
        localStorage.setItem('localJson', JSON.stringify(jsonArray))

    } else {
        jsonStr = localStorage.getItem('localJson')
        jsonArray = JSON.parse(jsonStr);
        jsonArray.push([titleValue, descriptionValue]);
        localStorage.setItem('localJson', JSON.stringify(jsonArray))
    }
    refreshList();
}

function refreshList() {

    console.log("Currentely list is refreshed")
    if (localStorage.getItem('localJson') == null) {
        jsonArray = [];
        // jsonArray.push([tit, desc]);
        localStorage.setItem('localJson', JSON.stringify(jsonArray))
    } else {
        jsonStr = localStorage.getItem('localJson');
        jsonArray = JSON.parse(jsonStr);
    }
    let tableBody = document.getElementById('tableBody');
    let html = "";
    jsonArray.forEach((value, index) => {
        html += ` 
        <tr>
        <th scope="row">${index+1}<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-box-arrow-up-right"id="maximizeBtn-${index+1}" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
      </svg></button>
      <!-- Modal -->
      <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title:${value[0]}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Description:${value[1]}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div></th>
        <td>${value[0].substring(0, 17)}</td>
        <td>${value[1].substring(0, 17)}</td>
        <td><button type="button" class="btn btn-sm btn-warning" onclick="deleteItem(${index})">Delete</button></td>
        </tr>`;

    });

    tableBody.innerHTML = html;
}
let addItemBtn = document.getElementById('addItemBtn');
addItemBtn.addEventListener('click', addAndUpdateItem);


refreshList();


function deleteItem(itemIndex) {
    jsonStr = localStorage.getItem('localJson')
    jsonArray = JSON.parse(jsonStr);


    jsonArray.splice(itemIndex, 1);
    localStorage.setItem('localJson', JSON.stringify(jsonArray));
    refreshList();

}

refreshItemBtn = document.getElementById("refreshItemBtn");
refreshItemBtn.addEventListener('click', refreshList)

// let element = "hisis1stelement";

// function splitelement(string) {
//     if (string.length > 10) {
//         +
//     }
//     console.log(string.substring(0, 10));

// }

// splitelement(element)