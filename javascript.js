// Create a new list item when clicking on the "Add" button

// let editValue = null;

// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }

//   if (editValue !== null) {
//     editValue.querySelector(".li").textcontent = inputValue;
//     editValue = null;
//   } else {

//     document.getElementById("myInput").value = "";

//     var list = document.createElement("li");
//     var button = document.createElement("button");
//     var btnEdit = document.createElement("button");
//     var deleteIcon = document.createElement("i");
//     var btnEditIcon = document.createElement("i");
//     li.className = "list-group-item";
//     button.className = "btn btn-icon";
//     btnEdit.className = "btn btn-icon";
//     deleteIcon.className = "fa-solid fa-trash";
//     btnEditIcon.className = "fa-solid fa-pen-to-square";
//     list.appendChild(button);
//     list.appendChild(btnEdit);
//     button.appendChild(deleteIcon);
//     btnEdit.appendChild(btnEditIcon);
//     li.appendChild(list);

//     button.onclick = function () {
//       // console.log("Delete button clicked");
//       li.remove();
//     }

//     btnEdit.onclick = function () {
//       console.log("Edit button clicked");
//       var inputValue = li.childNodes[0].nodeValue;
//       console.log(inputValue);

//       document.getElementById("myInput").value = li.inputValue;
//       if (editValue !== null && editValue.trim() !== '') {
//         li.childNodes[0].nodeValue = editValue.trim();
//       }
//     }
//   }
//   input.value = '';

// }


let editingLi = null; // Track the li being edited

  function newElement() {
    const input = document.getElementById("myInput");
    const inputValue = input.value.trim();

    if (inputValue === '') {
      alert("You must write something!");
      return;
    }

    if (editingLi) {
      // Edit existing li
      editingLi.querySelector("span").textContent = inputValue;
      editingLi = null;
    } else {
      // Create new li
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";

      const textSpan = document.createElement("span");
      textSpan.textContent = inputValue;

      const buttonGroup = document.createElement("div");

      const btnEdit = document.createElement("button");
      btnEdit.className = "btn btn-icon";
      const btnEditIcon = document.createElement("i");
      btnEditIcon.className = "fa-solid fa-pen-to-square";
      btnEdit.appendChild(btnEditIcon);

      btnEdit.onclick = function () {
        input.value = textSpan.textContent;
        editingLi = li;
      };

      const btnDelete = document.createElement("button");
      btnDelete.className = "btn btn-icon";
      const deleteIcon = document.createElement("i");
      deleteIcon.className = "fa-solid fa-trash";
      btnDelete.appendChild(deleteIcon);

      btnDelete.onclick = function () {
        if (editingLi === li) editingLi = null;
        li.remove();
      };

      buttonGroup.appendChild(btnEdit);
      buttonGroup.appendChild(btnDelete);

      li.appendChild(textSpan);
      li.appendChild(buttonGroup);

      document.getElementById("myUL").appendChild(li);
    }

    input.value = '';
  }