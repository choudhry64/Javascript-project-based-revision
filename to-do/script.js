const addBtn = document.getElementById("add-btn");
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");

addBtn.addEventListener("click", function () {
    const rawvalue = taskInput.value.trim();
    if(rawvalue === "" ){
        return;
    }
    const newLi = document.createElement("li");
    newLi.textContent = rawvalue + " ";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      newLi.remove();
    });

    newLi.appendChild(deleteBtn);

    tasklist.appendChild(newLi);

    taskInput.value = "";
});

