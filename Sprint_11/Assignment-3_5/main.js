//Callback Version

const callMe = (firstName, callback) => {
    setTimeout(() => {
      if (!firstName) return callback(new Error('no first name passed in!'))
  
      const fullName = `${firstName} Smith`
  
      return callback(fullName)
    }, 1000)
  }
  
  callMe('Ben', console.log)
  callMe(null, console.log)



  //Promise Version
  const c2promise = firstName => {
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(!firstName)
        {
            reject(new Error("No Name was entered"));
        }
        else
        {
            const fullName=`${firstName} Smith`;
            resolve(fullName);
        }
        },3000);
      });
  }  
  const inout = prompt("Enter your name");
  c2promise(inout).then(console.log).catch(console.log);
 