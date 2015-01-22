module.exports.sumNumbers = function(array){
   var answerValue=0;
    for (var i=0; i<array.length; i++){
       answerValue += array[i];
}

return answerValue;
  


};

module.exports.splitAndLowerCaseString = function(inputString){
return inputString.toLowerCase().split(',');



};

module.exports.addIndex = function(array){
var myArray=[];

for (var index=0; index<array.length; index++){

 myArray.push(index + " is "+ array[index]); 
}

return myArray;

};                                                                        