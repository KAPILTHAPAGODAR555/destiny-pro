const input = document.getElementById("input")
const result = document.getElementById("result")
const submit = document.getElementById("submit")

submit.addEventListener("click", function(e){
  if(input.value == ''){
    alert("Please enter the value")
  }
  else{
 calculate()}
})
const check=(str)=>{
  const regex = /[+\-]/g
  return str.replace(regex, 0)
}

function calculate(){
const int = input.value;

const clear = check(int)
let sum =0;
  
for(let i=0; i < clear.length; i++){
  
  sum += parseInt(clear[i]) 
}

  let  des = Math.floor(sum/10) + sum%10
  
  
  const first = parseInt(clear[clear.length-1])
  const second = parseInt(clear[clear.length-2])
  // const plus = first + second;
  let add = first + second;
  if(add >= 10){
     add = Math.floor(add/10) + add%10
  }
  if(des >= 10){
     des = Math.floor(des/10) + des%10

  }
  
 result.innerHTML = `<p>Destiny Number: ${des}</p><p>Pyshic Number:${add}</p>`
}

input.addEventListener("keydown", (e)=>{
  
  if(e.key == "Enter"){
    if(input.value==''){
    alert("Please enter the value")
  }
    else{
    calculate()}
  }
})




