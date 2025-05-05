const todolistInputId = document.getElementById("myInputId");
const todolistInput = document.getElementById("myInput");
const todolistUi = document.getElementById("addUlData");
const genderList = document.getElementById("genderList");
const addButton = document.getElementById("addBtn");

let todolistArry = [];
let editIndex = null;

function newElement() {
  const inputlistValueId = todolistInputId.value.trim();
  const inputlistValue = todolistInput.value.trim();
  const inputgenderList = genderList.value;

  if (inputlistValueId === '') {
    alert("Enter your task ID");
    return false;
  } else if (inputlistValue === '') {
    alert("Enter your task");
    return false;
  } else if (inputgenderList == '') {
    alert("Please Select Tasks Option");
    return false;
  };

  if (inputlistValueId !== '' && inputlistValue !== '' && inputgenderList !== '') {
    // object create
    const todolistObj = {
      ListID: inputlistValueId,
      listValue: inputlistValue,
      typeTask: inputgenderList,
    };

    // update object in array and check index

    if (editIndex !== null) {
      todolistArry[editIndex] = todolistObj;
      addButton.textContent = 'Add';
      editFlag = false;
      editIndex = null;

    } else {
      todolistArry.push(todolistObj);
    }

    // push object to array
    // todolistArry.push(todolistObj);
    inputlistValueId.value = '';
    inputlistValue.value = '';
    inputgenderList.value = '',
      console.log(todolistArry);
    todolistInputId.value = '';
    todolistInput.value = '';
    genderList.value = '';
    addlistData();

    localStorage.setItem('todoListData', JSON.stringify(todolistArry));
  }

  // // push to array
  // if (inputlistValueId !== '') {
  //   todolistArry.push(inputlistValue);
  //   console.log(todolistArry);
  //   todolistInput.value = '';
  //   addlistData();
  // }

  // todolistInput.value = '';
  // todolistInput.focus();
  // return false;
}

function addlistData() {
  todolistUi.innerHTML = '';
  for (let i = 0; i < todolistArry.length; i++) {
    const listArry = document.createElement("li");
    listArry.className = "list-group-item";
    // listArry.textContent = todolistArry[i];
    // listArry.textContent = todolistArry[i].listValue;
    listArry.textContent = todolistArry[i].ListID + " " + todolistArry[i].listValue + " " + todolistArry[i].typeTask;
    todolistUi.appendChild(listArry);

    const buttonGroup = document.createElement("div");

    // Delete button functionality
    const deletelistArry = document.createElement("button");
    deletelistArry.className = "btn btn-icon";
    deletelistArry.innerHTML = '<i class="fa-solid fa-trash"></i>';

    deletelistArry.onclick = function () {
      todolistArry.splice(i, 1);
      listArry.remove();
      console.log(todolistArry);
      localStorage.setItem('todoListData', JSON.stringify(todolistArry));
    }

    // edit button functionality
    const editButton = document.createElement("button");
    editButton.className = "btn btn-icon";
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editButton.onclick = function () {
      editIndex = i;
      todolistInputId.value = todolistArry[i].ListID;
      todolistInput.value = todolistArry[i].listValue;
      genderList.value = todolistArry[i].typeTask;
      addButton.textContent = 'Update';
      console.log(todolistArry);
    }

    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(deletelistArry);
    listArry.appendChild(buttonGroup);
  };

}

// if(editFlag){
//   todolistArry[editIndex] = todolistObj;
// }else{
//   todolistArry.push(todolistObj);
// }

// function addlistData() {
//   todolistUi.innerHTML = '';
//   let html = ''
//   if(editFlag){
//     todolistArry
//   }
//   for (let i = 0; i < todolistArry.length; i++) {
//     html +=`<li class="list-group-item">${todolistArry[i].ListID} ${todolistArry[i].listValue}</li>`
//      html +=`<buttun onclick="edit(${i})"><i class="fa-solid fa-pen-to-square"></i></buttun>`
//   }
//   document.getElementById("addUlData").innerHTML = html;
// }

// function edit(index) {
//   editFlag = true;
//   editIndex = index;
//   const inputElement = document.getElementById('myInputId'); // or document.querySelector('input[name="myInput"]')
//   inputElement.value = todolistArry[index].ListID;
//   const inputElement1 = document.getElementById('myInput'); // or document.querySelector('input[name="myInput"]')
//   inputElement1.value = todolistArry[index].listValue;
// }



//---------Calendar App Project-----------//

const monthSelect = document.getElementById("yearMonths");
const tableShow = document.getElementById("table");
const tableDataShow = document.getElementById("tableData");

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December", 
];

// Populate dropdown
let html = '';
for (let i = 0; i < months.length; i++) {
  html += `<option value="${i}">${months[i]}</option>`;
}
monthSelect.innerHTML = html;
console.log(months);

// Function to get number of days in a month
function getDateMonth(monthIndex, year) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

// submitMonth function and generate table
function submitMonth() {
  const monthIndex = parseInt(monthSelect.value);    //Parses a string and returns an integer
  const currentYear = new Date().getDate();
  const days = getDateMonth(monthIndex, currentYear);

  if (monthIndex !== '') {
      // Add Table
      let tablShow = '';
      for (let day = 1; day <= days; day++) {
        tablShow += `<tr data-row="${day}">
            <td>${day}</td>`;
    
            for (let dayIndex = 1; dayIndex < 8; dayIndex++){
              tablShow += ` 
                <td>
                  <input id="inputType" class="form-control" data-day="${dayIndex}" data-row="${day}" oninput="updateTotals()" placeholder="Enter Amount..">
                </td>`;
            }
    
          tablShow += `<td>
            <input type="text" class="form-control row-total" placeholder="Total Amount.." data-row="${day}">
          </td></tr>`;
      }
    
      // Add total row for columns
    
      tablShow += `<tr>
                    <td class="fw-semibold">Total</td>`;
                        for (let dayIndex = 1; dayIndex < 8; dayIndex++){
                           tablShow += ` <td>
                              <input class="form-control col-total" data-day="${dayIndex}" oninput="updateTotals()" placeholder="Total Amount..">
                          </td>`;
                        };  
      tablShow +=  `</tr>`;
      tableDataShow.innerHTML = tablShow;

    tableShow.style.display = "block";

  } else {
    tableShow.style.display = "none";
  };
  updateTotals();
};

function updateTotals() {
    const inputValue = document.querySelectorAll('#inputType');
    const rowTotal = document.querySelectorAll('.row-total');
    const colTotal = document.querySelectorAll('.col-total');
    const totalRows = {};
    const colArrayTotals = Array(8).fill(0);
    console.log(totalRows);
    console.log(colArrayTotals);
    // console.log(inputValue);

    inputValue.forEach(input => {
      const inputValue = parseFloat(input.value) || 0;  // Parses a string and returns a floating point number
      const Value = input.dataset.row;
      const day = parseInt(input.dataset.day);  // Parses a string and returns an integer

      // Row total
      totalRows[Value] = (totalRows[Value] || 0) + inputValue;
  
      // Column total
      colArrayTotals[day] += inputValue;
    });
  
    // Set row totals
    rowTotal.forEach(input => {
      const row = input.dataset.row;
      input.value = totalRows[row] || '';
    });
  
    // Set column totals
    colTotal.forEach(input => {
      const day = parseInt(input.dataset.day);
      input.value = colArrayTotals[day] || '';
    });
}



// const monthSelect = document.getElementById("yearMonths");
// const tableDataShow = document.getElementById("tableData");

// const months = [
//   "January", "February", "March", "April",
//   "May", "June", "July", "August",
//   "September", "October", "November", "December"
// ];

// console.log(months);

// let html = '';
// for (let i = 0; i < months.length; i++) {
//   html += `<option value="${months[i]}">${months[i]}</option>`;
// }
// // data binding to the html for select
// monthSelect.innerHTML = html;

// function getDateMonth(monthList, year) {
//   return new Date(year, monthList + 1, 0).getDate();
// }

// function submitMonth() {
//   const monthsList = parseInt(monthSelect.value);
//   const tableShow = tableData.value;
//   const currentDate = new Date().getDate();
//   const days = getDateMonth(monthsList, currentDate);
//   console.log(days);
//   console.log(tableShow);

//   let tablShow = '';
//   for (let day = 1; day <= days; day++){
//     tablShow +=`<tr>
//         <td>@{day}</td>
//         <td>@{date}</td>
//     </tr>`;
//   };

//   tableDataShow.innerHTML = tablShow;
  
// };

















