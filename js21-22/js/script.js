function pow(querty){
var numArray = querty.split(',');
var total = numArray[0];
if(numArray[1]==0){
total = 1;
} else if (Math.sign(numArray[1])==-1) {
  numArray[1] = -numArray[1];
  for(var i = 0; i<=numArray[1]; i++ ){
    total = total/numArray[0];
  }
}else{
  for(var i = 1; i<numArray[1]; i++ ){
    total = total*numArray[0];
  }
}
return total;

}

module.exports = pow;
