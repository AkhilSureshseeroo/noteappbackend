const express = require('express');
const notesRoutes = express.Router();
const notesController = require('../controllers/notescontroller') 


notesRoutes.post('/addNotes', notesController.addNote)
notesRoutes.get('/getAllNotes',notesController.getAllNotes)
notesRoutes.get('/getNote/:id',notesController.getNotebyId)
notesRoutes.put('/editNote/:id',notesController.updateNote)
notesRoutes.delete('/deleteNote/:id',notesController.deleteNote)

module.exports=notesRoutes;