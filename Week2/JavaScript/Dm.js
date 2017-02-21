function get_time(h,min,p){
  if(min > 30){
    h += 1
  }
  if(p === "PM"){
    p = "evening"
  }
  if(p === "AM"){
    p = "morning"
  }
  if(min > 30){
    console.log("It's almost", h, "in the", p)
  }
  else{
    console.log("It's just after", h, "in the", p)
  }
}

get_time(8,45,"AM")
get_time(7,23,"PM")
get_time(7,31,"PM")
