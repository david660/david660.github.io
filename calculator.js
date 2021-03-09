window.onload=initAll;

function initAll() {
  const numbers=document.querySelectorAll(".calculator-buttons .number");
  let display=document.querySelector(".calculator-input input");
  const back=document.querySelector(".back");
  let squareRt=document.querySelector(".squareRt");
  const clear=document.querySelector(".clear");



  numbers.forEach((number)=>{
      number.addEventListener("click", function(){
        insert(number.textContent);
      });
  });

  const equals=document.querySelector(".equals");
  equals.addEventListener("click", function(){
    equal();
  });

  back.addEventListener("click", function(){  
    backs();
  });

  squareRt.addEventListener("click", function(){
    squareRoot(display.value);
  });


  clear.addEventListener("click", ()=>{
    display.value="";
  })

  function insert(num) {
    display.value=display.value + num;
  }

  function equal(){
    display.value=eval(display.value)
  }
  function backs(){
    let ret=display.value;
    display.value=ret.substring(0,ret.length-1);
  }
  function squareRoot(num) {
    let ans=Math.sqrt(num);
    let resolve=parseFloat(ans).toFixed(2);
    display.value=resolve;
  }


  
}