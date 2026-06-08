const AddNotes = document.getElementById("addNotes");
const NotesContainer = document.getElementById("notes-container");

// Page load hote hi saved notes dikhao
loadNotes();

AddNotes.addEventListener("click", function () {
  createNote("");
});

function createNote(text) {
  const noteCard = document.createElement("div");
  noteCard.classList.add("note-card");

  const notes = document.createElement("textarea");
  notes.value = text;

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  saveBtn.addEventListener("click", function () {
    saveNotes();
    alert("Saved!");
  });

  deleteBtn.addEventListener("click", function () {
    noteCard.remove();
    saveNotes();
  });

  noteCard.appendChild(notes);
  noteCard.appendChild(saveBtn);
  noteCard.appendChild(deleteBtn);

  NotesContainer.appendChild(noteCard);
}

function saveNotes() {
  const allTextareas = document.querySelectorAll("textarea");

  const notesArray = [];

  allTextareas.forEach((note) => {
    notesArray.push(note.value);
  });

  localStorage.setItem(
    "userNotes",
    JSON.stringify(notesArray)
  );
}

function loadNotes() {
  const savedNotes =
    JSON.parse(localStorage.getItem("userNotes")) || [];

  savedNotes.forEach((text) => {
    createNote(text);
  });
}