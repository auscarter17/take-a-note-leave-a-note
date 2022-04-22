const router = require('express').Router();
const res = require('express/lib/response');
const db = require('../../db/db')
const { notes } = require('../../db/db');
const { findById, createNewNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    const newNote = createNewNote(req.body, db);
    res.json(newNote);
});

module.exports = router;