const mongoose=require('mongoose');

async function connectToMongoDB(url){
    try{
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}
module.exports={connectToMongoDB};