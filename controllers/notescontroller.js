const Notes = require('../models/Notes');


exports.addNote = async (req, res) => {
    try {
        const{ Title,  Description} = req.body;
        const noteData = await Notes.create({
			Title,
			Description,
		});
        if (noteData) {
			return res.json({ message: ' note created' }).status(200);
		}
		res.json({ message: 'Error' }).status(400);
    } catch (error) {
        if (error) {
            throw error;
        }
        res.json({ msg: 'server Error'}).status(500);
    }
};

exports.getAllNotes = async (req, res) => {
    try {
        const notesData = await  Notes.find()
        if (notesData) {
			return res.json(notesData).status(200);
		}
		res.json({ message: 'Error' }).status(400);
    } catch (error) {
        if (error) {
            throw error;
        }
        res.json({ msg: 'server Error'}).status(500);
    }
}
exports.getNotebyId=async(req,res)=>{
    try{
        const notesData=await Notes.findById(req.params.id)
        
        if(notesData){
            return res.json(notesData).status(200);
        }
        res.json({message:'Error'}).status(400);
    }catch(error){
        if(error){
            throw error;
        }
    }
}

exports.updateNote = async (req, res) => {
    try {
        const{ Title,  Description} = req.body;
        const{ id} = req.params;
        const noteData = await Notes.updateOne({_id:id},{
            $set:{
                noteTitle,
                noteDescription,
            },
		});
        if (noteData) {
			return res.json({ message: ' note updated' }).status(200);
		}
		res.json({ message: 'Error' }).status(400);
    } catch (error) {
        if (error) {
            throw error;
        }
        res.json({ msg: 'server Error'}).status(500);
    }
};


exports.deleteNote = async (req, res) => {
    try {
        const{ id} = req.params;
        const noteData = await Notes.findByIdAndRemove(id);
        if (noteData) {
			return res.json({ message: ' note deleted ' }).status(200);
		}
		res.json({ message: 'Error' }).status(400);
    } catch (error) {
        if (error) {
            throw error;
        }
        res.json({ msg: 'server Error'}).status(500);
    }
};
