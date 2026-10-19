import mongoose from "mongoose";

//1st create a schema
//2nd model based of that schema 

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    content: {
        type:String,
        required: true,
    },
}, { timestamps: true} //createdAt, updateAt
);

const Note = mongoose.model("Note", noteSchema)
export default Note;