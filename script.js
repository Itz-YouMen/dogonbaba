function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
  }
  let message = document.getElementById("message")
  let clickCount = 0;
  function randoms(){
    clickCount++
    if(clickCount === 1){
        message.innerHTML = "Dogonbaba Communication provides"
    }
    else if(clickCount === 2){
        message.innerHTML = "professional telecom"
    }
    else if(clickCount === 3){
        message.innerHTML = "and digital services including"
    }
    else if(clickCount === 4){
        message.innerHTML = "MTN Sim registration"
    }
    else if(clickCount === 5){
        message.innerHTML = "Airtel Sim registration"
    }
    else if(clickCount === 6){
        message.innerHTML = "9mobile Sim registration"
    }
    else if(clickCount === 7){
        message.innerHTML = "glo Sim registration"
    }
    else if(clickCount === 8){
        message.innerHTML = "BVN/NIN registration"
    }
    else if(clickCount === 9){
        message.innerHTML = "Mobile Phone Sells"
        clickCount = 0;
    }
  }
  setInterval(randoms, 2000)
 