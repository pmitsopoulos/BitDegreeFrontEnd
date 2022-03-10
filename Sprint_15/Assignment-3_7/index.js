import fs from 'fs/promises';

async function loadData()
{
    const data = await fs.readFile("users.json");

    return  JSON.parse(data);
}

async function run()
{
    let data = await loadData();
    const operation = process.argv[2];
    const incomingData = process.argv[3]; 
    
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
        data = await removeData(data, incomingData);
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


await run();