const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// Create a new note
router.post("/add", async (req, res) => {
  try {
    const { text } = req.body;
    const newNote = new Note({ text });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: "Failed to add note" });
  }
});

// Delete a note
router.delete("/delete/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete note" });
  }
});

module.exports = router;
