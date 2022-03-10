import fs from 'fs/promises';

async function loadData()
{
    const data = await fs.readFile("users.json");

    return  JSON.parse(data);
}

async function run(operationIncoming , dataIncoming)
{
    let data = await loadData();
    const operation = operationIncoming;
    const incomingData = dataIncoming; 
    
    //console.log(operation);
    //console.log(incomingData);

    if(operation === "add")
    {
        data = await addUser(data, incomingData);
    }
    else if(operation === "read")
    {
        console.log(data);
    }
    else if(operation === "remove")
    {
        //console.log("REMOVE  was used!")

        const tbrUser = data.find(a=>a.id === parseInt(incomingData));
        if(typeof tbrUser !== "undefined")
        {
            console.log(`the entry with the id of ${incomingData} is going to be removed...`);
            data = await removeData(data, incomingData);
        }
        else
        {
            const err = new Error(`The specified entry (with the id of ${incomingData}) does not exist...`);
            err.code = "ERR_MUST_BE_A_CURRENT_USER";
            throw err;
        }
        
    }
    await saveData(data);
}

async function addUser(data, newUser)
{
    const newId = data.reduce((a,c) => Math.max(a, c.id), 0) + 1;
    data.push({"id": parseInt(newId), "name": newUser});
    //console.log(data);
    return data;
}

async function saveData(data)
{
    fs.writeFile("./users.json",JSON.stringify(data));
    return data;
}

async function removeData(data, removeId)
{
    data = data.filter((a)=>a.id !== parseInt(removeId));
    return data;
}


 async function checks(input1, input2)
{
    const operation = input1;
    const incomingData = input2;

    const currentOperationsList = ["add","read","remove"];

    function verifyOperationInput (operationInput, currentOperations)
    {
        //console.log(currentOperations.indexOf(operationInput));

        if(!(currentOperations.indexOf(operationInput) > -1))
        {
            const err = new Error(`that operation does not exist you can use one of the following operations: ${currentOperationsList}`);   
            err.code = "ERR_CAN_ONLY_BE_A_VALID_OPERATION";  
            throw err;    
        }
    }
    verifyOperationInput(operation,currentOperationsList);

    await run(operation, incomingData);
}


try{
    console.log("try was invoked");

    //await checks("add","Denzel");
    //await checks("twist", "Alma");

    //await checks("remove",5);
    await checks("remove",2);
}
catch(err)
{
    if(err.code === "ERR_CAN_ONLY_BE_A_VALID_OPERATION")
    {
        console.log(`That is not a valid operation`);
        console.log(err);
    }
    else if(err.code === "ERR_MUST_BE_A_CURRENT_USER")
    {
        console.log("A user with that ID does not exist");
        console.log(err);
    }
    else
    {
        console.log(err);
    }
}
