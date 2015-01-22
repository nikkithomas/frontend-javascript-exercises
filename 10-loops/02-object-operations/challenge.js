module.exports.copy = function(object){
var newObject={};
return Object.create(object);


};

module.exports.extend = function(dest,src){
  for (property in src){
    dest[property]=src[property];
  }
return dest;


};

module.exports.hasElems = function(object,array){
  for (var i=0;i<array.length;i++){
    if (object[array[i]]===undefined){
      return false;
    }
  }
  return true;
};