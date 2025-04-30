const todolistInputId = document.getElementById("myInputId");
const todolistInput = document.getElementById("myInput");
const todolistUi = document.getElementById("addUlData");
const genderList = document.getElementById("genderList");

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

  if (inputlistValueId !== '' && inputlistValue !== '' && inputgenderList !=='') {
    // object create
    const todolistObj = {
      ListID: inputlistValueId,
      listValue: inputlistValue,
      typeTask: inputgenderList,
    };

    // update object in array and check index

    if(editIndex !== null){
      todolistArry[editIndex] = todolistObj;
      editFlag = false;
      editIndex = null;
    } else{
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





