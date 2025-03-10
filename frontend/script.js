const API_URL = "http://localhost:5000/notes";

async function fetchNotes() {
    try {
        const response = await fetch(API_URL);
        const notes = await response.json();

        const notesContainer = document.getElementById("notesContainer");
        notesContainer.innerHTML = "";

        notes.forEach((note) => {
            const noteElement = document.createElement("div");
            noteElement.classList.add("note");
            noteElement.innerHTML = `
                <p>${note.text}</p>
                <button class="delete-btn" onclick="deleteNote('${note._id}')">Delete</button>
            `;
            notesContainer.appendChild(noteElement);
        });
    } catch (error) {
        console.error("Error fetching notes:", error);
    }
}

async function addNote() {
    const noteInput = document.getElementById("noteInput");
    const text = noteInput.value.trim();
    
    if (!text) {
        alert("Note cannot be empty!");
        return;
    }

    try {
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });

        noteInput.value = "";
        fetchNotes();
    } catch (error) {
        console.error("Error adding note:", error);
    }
}

async function deleteNote(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        fetchNotes();
    } catch (error) {
        console.error("Error deleting note:", error);
    }
}

window.onload = fetchNotes;
