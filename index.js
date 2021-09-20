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
        <th scope="row">${index+1}</th>
        <td>${value[0]}</td>
        <td>${value[1]}</td>
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