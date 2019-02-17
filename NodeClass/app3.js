
var callback = function(param){
    console.log("Vadamaduchka : ",param);
}

callback("abc");

function myFunction(param,func){
    func(param);
}

myFunction("Said",callback);