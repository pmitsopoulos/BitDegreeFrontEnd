const API_KEY="secret";
const city ="Athens";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
fetch(url).then(response=>{
    if(!response.ok)
    {
        throw new Error(`Error has occured: ${response.status}`);
    }
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>console.log(err));


