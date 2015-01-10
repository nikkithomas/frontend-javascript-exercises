module.exports.equalStrings = function(stringOne, stringTwo) {
  if (stringOne==stringTwo){
    return true;
  }
  else{
    return false;
  }
};



module.exports.notEqual = function(one, two) {
  if (one===two){
    return false;
  }
  else{
    return true;
  }

};



module.exports.inBetween = function(lower, middle, upper) {

return ((middle>lower)&&(middle<upper))
 
};





module.exports.outsideRanges = function(number) {
 return (!(number>=10 && number <=20)&&
  !(number>42&&number<=75)&&
  !(number>1&&number<6));

};



module.exports.nameAndPrice = function(name, price) {
return ((name==="NYTimes"||name==="LATimes")&&(price>=1));
  

};

