let HydrateFn = setInterval(()=>{
    document.writeln("Hello!");
},2000);

let StopFn = setTimeout(()=>{
    clearInterval(HydrateFn);
}, 60000);