module.exports.stream = function(conditionalFn,actionFn){

while (conditionalFn()){
  actionFn();
}
};




module.exports.sumNumbers = function(arrayOfNum){

var zero=0
for (var i=0; i<arrayOfNum.length; i++){
  zero+=arrayOfNum[i];
}

return zero;

};

