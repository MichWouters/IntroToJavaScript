function doStuff(myVar){
    let myOutput = myVar / 2;

    return myOutput;   
}

function doMoreStuff(){
    let result1 = doStuff(24);
    let result2 = doStuff(36);

    console.log(result1);
    console.log(result2);
}

doMoreStuff();