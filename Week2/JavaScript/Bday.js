function bDay() {
  for (var i = 60; i > 0; i--) {
    if(i > 5){
      console.log(i, "days until my birthday!")
    }
    if(i <= 5){
      console.log(i, "DAYS UNTIL MY BIRTHDAY")
    }
    if (i === 0) {
      console.log("It's my Birthday, Let's party!!!")
    }
  }
}

bDay()
