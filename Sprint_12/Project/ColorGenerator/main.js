$(document).ready(()=>{
    console.log("The document is ready");
    $("#button").click(()=>{
        let RGBvalues = randomRGBcolor();
        let RGBcolor=`rgb(${RGBvalues[0]}, ${RGBvalues[1]}, ${RGBvalues[2]})`;
        $("body").css("background-color",RGBcolor);
        $("#color").text(RGBcolor);
    });
});

function randomNumber()
{
    return Math.floor(Math.random() * 256 );
}

function randomRGBcolor(){

    let r = randomNumber();
    let g = randomNumber();
    let b = randomNumber();

    return [r,g,b];

}


