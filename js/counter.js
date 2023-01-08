
// counters

let experience = parseInt(document.querySelector(".exp").innerHTML);
let clients = parseInt(document.querySelector(".clients").innerHTML);


let counter = setInterval(() => {
  experience = experience +1  ; 
  document.querySelector(".exp").innerHTML =  "+" + experience
   if(experience == 30) {
     clearInterval(counter)
   }
 },300);
 

let counter2 = setInterval(() => {
  clients = clients + 1000  ; 
  document.querySelector(".clients").innerHTML =  "+" + clients
   if(clients == 50000) {
     clearInterval(counter2)
   }
 }, 180);
 

/*******************************************************************************************/