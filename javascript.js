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



const todolistInput = document.getElementById("myInput");
const todolistUi = document.getElementById("addUlData");

let todolistArry = [];

function newElement() {
  const inputlistValue = todolistInput.value.trim();

  if (inputlistValue === '') {
    alert("Enter your task");
    return false;
  }

  if (inputlistValue !== '') {
    // object create
    const todolistObj = {
      listValue: inputlistValue,
    };

    // push object to array
    todolistArry.push(todolistObj);
    inputlistValue.value = '';
    console.log(todolistArry);
    todolistInput.value = '';
    addlistData();
  }

  // todolistInput.value = '';
  // todolistInput.focus();
  // return false;
}


function addlistData() {
  todolistUi.innerHTML = '';
  for (let i=0; i<todolistArry.length; i++) {
    const listArry = document.createElement("li");
    listArry.className = "list-group-item";
    listArry.textContent = todolistArry[i].listValue;
    todolistUi.appendChild(listArry);

    const buttonGroup = document.createElement("div");

    // Delete button functionality
    const deletelistArry = document.createElement("button");
    deletelistArry.className = "btn btn-icon";
    deletelistArry.innerHTML = '<i class="fa-solid fa-trash"></i>';

    deletelistArry.onclick = function() {
      todolistArry.splice(todolistArry[i], 1);
      listArry.remove();
      console.log(todolistArry);  
    }
    buttonGroup.appendChild(deletelistArry);
    listArry.appendChild(buttonGroup);
  };

  // todolistArry.forEach((el, index) => {
  //   const listArry = document.createElement("li");
  //   listArry.className = "list-group-item";
  //   listArry.textContent = el.listValue;
  //   todolistUi.appendChild(listArry);

  //   const buttonGroup = document.createElement("div");

  //   // Delete button functionality
  //   const deletelistArry = document.createElement("button");
  //   deletelistArry.className = "btn btn-icon";
  //   deletelistArry.innerHTML = '<i class="fa-solid fa-trash"></i>';

  //   deletelistArry.onclick = function() {

  //   }
  //   buttonGroup.appendChild(deletelistArry);
  //   listArry.appendChild(buttonGroup);
  // });
 
}






