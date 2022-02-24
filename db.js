
const mongoose=require("mongoose")
const dbLink="mongodb+srv://shivamkawde:IKN8TdvKXovy3bOV@cluster0.asmcq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const post=mongoose.Schema({
    title: String,
    content: String,
    comments:Array
});
const comment=mongoose.Schema({
    postId: String,
    content: String,
    
})
const postModel=mongoose.model('postModel',post);
module.exports={postModel}