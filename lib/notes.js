const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function findById(id, dbArray) {
    const result = dbArray.filter(note, note.id === id)[0];
    return result;
}

function createNewNote(body, dbArray) {
    const newNote = body;
    newNote.id = uuidv4();
    dbArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ dbArray }, null, 2)
    );
    return newNote;
}

module.exports = {
    findById,
    createNewNote
};