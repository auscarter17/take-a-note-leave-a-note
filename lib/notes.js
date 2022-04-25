const fs = require('fs');
const path = require('path');
// node package that allows unique ids to be made based on time published
const { v4: uuidv4 } = require('uuid');

// enables notes to be identified by their unique id 
function findById(id, db) {
    const result = db.filter(note, note.id === id)[0];
    return result;
}

// creates a new note and pushes it into the db with a unique id
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

// if able to add delete function later, add here

module.exports = {
    findById,
    createNewNote
};