// let editingLi = null; // Track the li being edited

//   function newElement() {
//     const input = document.getElementById("myInput");
//     const inputValue = input.value.trim();

//     if (inputValue === '') {
//       alert("You must write something!");
//       return;
//     }

//     if (editingLi) {

//     // Edit existing li
//       editingLi.querySelector("li").textContent = inputValue;
//       editingLi = null;
//     } else {

//     // Create new li
//       const list = document.createElement("li");
//         // list.textContent = inputValue;
//       list.className = "list-group-item";

//       const textlist = document.createElement("li");
//       textlist.textContent = inputValue;

//         const buttonGroup = document.createElement("li");

//     // Edit button functionality 
//       const btnEdit = document.createElement("button");
//       btnEdit.className = "btn btn-icon";
//       const btnEditIcon = document.createElement("i");
//       btnEditIcon.className = "fa-solid fa-pen-to-square";
//       btnEdit.appendChild(btnEditIcon);

//       btnEdit.onclick = function () {
//         input.value = list.textContent;
//         editingLi = list;
//       };

//     // Delete button functionality
//       const btnDelete = document.createElement("button");
//       btnDelete.className = "btn btn-icon";
//       const deleteIcon = document.createElement("i");
//       deleteIcon.className = "fa-solid fa-trash";
//       btnDelete.appendChild(deleteIcon);

//       btnDelete.onclick = function () {
//         if (editingLi === list) editingLi = null;
//         list.remove();
//       };

//       list.appendChild(textlist);

//           buttonGroup.appendChild(btnEdit);
//           buttonGroup.appendChild(btnDelete);
//           list.appendChild(buttonGroup);
//       document.getElementById("myUL").appendChild(list);
//     }

//     input.value = '';
//   }


const todolistInputId = document.getElementById("myInputId");
const todolistInput = document.getElementById("myInput");
const todolistUi = document.getElementById("addUlData");

let todolistArry = [];
let editIndex = null;

function newElement() {
  const inputlistValueId = todolistInputId.value.trim();
  const inputlistValue = todolistInput.value.trim();

  if (inputlistValueId === '') {
    alert("Enter your task ID");
    return false;
  } else if (inputlistValue === '') {
    alert("Enter your task");
    return false;
  }

  if (inputlistValueId !== '' && inputlistValue !== '') {
    // object create
    const todolistObj = {
      ListID: inputlistValueId,
      listValue: inputlistValue,
    };

    // update object in array and check index

    if(editIndex !== null){
      todolistArry[editIndex] = todolistObj;
      editIndex = null;
    } else{
      todolistArry.push(todolistObj);
    }

    // push object to array
    // todolistArry.push(todolistObj);
    inputlistValueId.value = '';
    inputlistValue.value = '';
    console.log(todolistArry);
    todolistInputId.value = '';
    todolistInput.value = '';
    addlistData();
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
    listArry.textContent = todolistArry[i].ListID + " " + todolistArry[i].listValue;
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
    }

    // edit button functionality
    const editButton = document.createElement("button");
    editButton.className = "btn btn-icon";
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editButton.onclick = function () {
      editIndex = i;
      todolistInputId.value = todolistArry[i].ListID;
      todolistInput.value = todolistArry[i].listValue;
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



  




