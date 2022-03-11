import mongoose from "mongoose";

//Establish a connection to the mongo database via its' connection string
await mongoose.connect("mongodb://localhost:27017/marvel" , {useNewUrlParser : true, useUnifiedTopology:true } );

//give an alias to our connection
const db = mongoose.connection;

//error handling when there is a problem with the database connection
db.on("error", console.error.bind(console,"Unaable to establish connection..."));


//Creating a collection
//db.createCollection("characters");

//Declaring a collection Schema
const CharacterSchema = new mongoose.Schema({
    code_name: {type: String},
    real_name: {type: String},
    team: {type: String},
    marvel_comic: {type: String}
});

//Declaring a model
const Character = mongoose.model("Character",CharacterSchema);

/**
 * This function creates entries on our database
 */
async function createMembers()
{
    const blyatMan = new Character({
        code_name: "Blyat-Man",
        real_name: "Vruce Bayne",
        team: "Lustice Jeague Ark",
        marvel_comic: "Lustice for All"
    });
    const duperMan = new Character({
        code_name: "Duper-Man",
        real_name: "El Kal",
        team: "Lustice Jeague",
        marvel_comic: "Lustice for All"
    });
    const wonderMan = new Character({
        code_name: "Wonder Man",
        real_name: "Dian Prince",
        team: "Lustice Jeague",
        marvel_comic: "Lustice for All"
    });
    const greenSword = new Character({
        code_name: "Green-Sword",
        real_name: "Oliver Prince",
        team: "Lustice Jeague Ark",
        marvel_comic: "Lustice for All"
    });

    greenSword.save();
    blyatMan.save();
    wonderMan.save();
    duperMan.save();
}

/**
 * This is function is used to Query the database to return a character
 */
async function findMember()
{
    const member = await Character.findOne({code_name:"Blyat-Man"});
    console.log(member);
}

/**
 * This function is used to Delete all entries given a parameter
 */
async function deleteAll()
{
    await Character.deleteMany({team:"Lustice Jeague"});
}

/** 
 * This function is used to Update one entry given a parameter and updated format
 */
async function updateOne()
{
    const target = await Character.findOne({code_name:"Blyat-Man"});

    console.log(target);

    const result = await Character.findOneAndUpdate(target, {code_name:"Steel-Man",real_name:"Tony Skank",team:"Revengers"});
    console.log(result);
}

//await deleteAll();
//await findMember();
//await createMembers();
//await updateOne();