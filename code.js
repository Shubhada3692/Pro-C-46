let result = document.getElementById("input")
console.log(result)

var buttons = document.querySelectorAll("button")
var inpValue = ""

for (var i of buttons){
  i.addEventListener("click",function(p){ 
      var buttonValue = p.target.innerText
      console.log(buttonValue)
      if (buttonValue === "C"){
          inpValue = ""
          result.value = inpValue;
        }else if(buttonValue === "="){
            result.value = eval(inpValue)
        }else{
            inpValue = inpValue+buttonValue
            result.value = inpValue
        }

  })
}
