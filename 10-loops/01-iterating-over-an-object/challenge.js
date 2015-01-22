module.exports.getKeys = function(object){
  
  return Object.keys(object);
};
module.exports.getValues = function(object){
 return Object.keys(object).map(function(k){
  return object[k]
 });

};

module.exports.objectToArray = function(obj){
  
var keys=Object.keys(obj);


 return  keys.map(function(key){
  return key + ' is '+obj[key];
  });





};