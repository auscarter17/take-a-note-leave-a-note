const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function findById(id, db) {
    const result = db.filter(note, note.id === id)[0];
    return result;
}

function createNewNote(body, db) {
    const newNote = body;
    newNote.id = uuidv4();
    db.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(db, null, 2)
    );
    return newNote;
}

module.exports = {
    findById,
    createNewNote
};