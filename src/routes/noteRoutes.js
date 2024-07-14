const express = require("express");
const { getNote, createNote, updateNote, deleteNote} = require("../controllers/noteController");
const noteRouter = express.Router();
const auth = require("../middleware/auth");

noteRouter.get("/" ,auth,getNote );

noteRouter.post("/" ,auth, createNote);

noteRouter.put("/:id" ,auth, updateNote);

noteRouter.delete("/:id" , auth , deleteNote);




module.exports = noteRouter;
