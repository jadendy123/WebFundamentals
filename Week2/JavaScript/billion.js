function bDay() {
  var sum = 0.01;
  for (var i = 2; i < 30; i++) {
    sum = sum + (sum * 2)
  }
  console.log(sum);
}

bDay()
