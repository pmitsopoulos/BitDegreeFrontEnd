

const API_KEY="secret";
const cityForm = document.querySelector("#weather"); 
const preEl = document.querySelector("#results");

cityForm.addEventListener("submit",(event)=>{
     event.preventDefault();
     WeatherInfo(preEl,cityForm);
});


async function WeatherInfo(preElement,formElement)
{
    const city = document.querySelector("#city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    
    try
    {
        const response = await request(url);
        console.log(response)
        preElement.innerText = JSON.stringify(response);  
    }
    catch(err)
    {
        console.log(err);
    }
}

const request = (url)=>{
    return new Promise((resolve,reject)=>{
        const response = fetch(url).then((response)=>{
            console.log(response);
            if(!response.ok)
            {
                reject(new Error("Error " + response.status));
            }
            else
            {
                resolve(response.json());
            }
        });

    });
}