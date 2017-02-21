function printRange(start,end,add) {
  var b = start;
  console.log(start);
  while(b < end - add){
    b = b + add;
    console.log(b);
  }

}
printRange(2,60,4)
