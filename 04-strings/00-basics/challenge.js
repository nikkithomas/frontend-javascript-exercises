module.exports.formLetter = function(firstName, senderName, message) {
return "Hello "+firstName+",\n\n" +message+"\n\nSincerely,\n"+senderName;
};


module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {

 var a = bigString.substring(startA, endA);
        var b=bigString.substring(startB, endB);
        return a+b;
      };


module.exports.findFirstMatch = function(text, searchString) {
  var a=text;
  var b=searchString;
  return text.indexOf(searchString);
};



module.exports.findLastMatch = function(text, searchString) {
  var a =text;
  var b=searchString;
  return text.lastIndexOf(searchString);

};

module.exports.substringBetweenMatches = function(text, searchString) {
var start =text.indexOf(searchString) + searchString.length;
var end = text.lastIndexOf(searchString);
return text.substring(start,end);
};

