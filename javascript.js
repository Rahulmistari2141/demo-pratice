// Create a new list item when clicking on the "Add" button
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
      editingLi.querySelector("li").textContent = inputValue;
      editingLi = null;
    } else {

    // Create new li
      const li = document.createElement("li");
      li.className = "list-group-item";

      const textlist = document.createElement("li");
      textlist.textContent = inputValue;

      const buttonGroup = document.createElement("div");

    // Edit button functionality 
      const btnEdit = document.createElement("button");
      btnEdit.className = "btn btn-icon";
      const btnEditIcon = document.createElement("i");
      btnEditIcon.className = "fa-solid fa-pen-to-square";
      btnEdit.appendChild(btnEditIcon);

      btnEdit.onclick = function () {
        input.value = textlist.textContent;
        editingLi = li;
      };

    // Delete button functionality
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
      li.appendChild(textlist);
      li.appendChild(buttonGroup);

      document.getElementById("myUL").appendChild(li);
    }

    input.value = '';
  }