module.exports.addItem = function(itemToAdd,array){
  if (array.indexOf(itemToAdd) === -1) {
    array.push(itemToAdd);
  }

  return array;


// var ray=array;
// var push=array.push(itemToAdd);
// if(array.indexOf(itemToAdd)== -1){
//   return push;
  
// }

// else{


// return ray;

// }

};

module.exports.reverseSortedList = function(array){

  array.sort().reverse();
  return array;
};