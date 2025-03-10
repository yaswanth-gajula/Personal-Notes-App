const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const NoteSchema = new mongoose.Schema({
    text: String,
    createdAt: { type: Date, default: Date.now }
});

const Note = mongoose.model("Note", NoteSchema);

app.post("/notes", async (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Note cannot be empty" });

    const newNote = new Note({ text });
    await newNote.save();
    res.status(201).json(newNote);
});

app.get("/notes", async (req, res) => {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
});

app.delete("/notes/:id", async (req, res) => {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.json({ message: "Note deleted successfully" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
