const User=require("../models/user");
async function getUsers(){
    try{
        const users = await User.find();
        return users;
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function getUserByEmail(email:string){
    try{
        const user = await User.findOne({email});
        return user;
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function getUserBySessionToken(sessionToken:string){
    try{
        const user = await User.findOne({'authentication.sessionToken':sessionToken});
        return user;
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function getUserById(id:string){
    try{
        const user = await User.findById(id);
        return user;
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function createUser(values:Record<string,any>){
    try{
        const user = await User.create(values);
        return user;
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function deleteUserById(id:string){
    try{
        const user = await User.findByIdAndDelete(id);
        return user;
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function updateUserById(id:string,values:Record<string,any>){
    try{
        const user = await User.findByIdAndUpdate(id,values);
        return user;
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}
module.exports={
    getUsers,
    getUserByEmail,
    getUserBySessionToken,
    getUserById,
    createUser,
    deleteUserById,
    updateUserById
}