//Div and Canvas constants
const calcCanvas = document.createElement('CANVAS');
const calcDiv = document.createElement('DIV');

//canvas setup variables
let mouseX = 0, mouseY = 0, ctx, width, height;
//ooperation variables;
let mathOp = '', numStr = '0', numStrMem = '0', operation = 0, error = '';
const MAXLENGTH = 30;

//style variables
//set calculator colours
const numColor = 'rgb(159, 131, 232)';
const numHoverColor = 'rgb(159, 131, 182)';
const scnColor = 'rgb(227, 230, 255)';
const btnColor = 'rgb(223, 157, 255)';
const btnHoverColor = 'rgb(232, 131, 216)';
const clrColor = 'rgb(255, 144, 155)';
const clrHoverColor = 'rgb(255, 144, 100)'
  //set calculater fonts
const calcFont = '50px Arial';

//on window load 
window.onload = function() {
  //append calculater div to body
  document.body.appendChild(calcDiv);
  //appen calculater canvas to calculater div
  calcDiv.appendChild(calcCanvas);
  //create calculater div context
  calcDiv.style.width = '400px';
  calcDiv.style.margin = 'auto';
  //draw calulator
  calculator();
}

//client mouse listeners
document.onmousemove = function(event) {
  let rect = calcCanvas.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  calculator();
}
calcCanvas.onmouseleave = function(event) {
  mouseX = -1;
  mouseY = -1;
}

//get context function 
function getContext(_height, _width, _canvas) {
  ctx = _canvas.getContext('2d');
  //set canvas width and height
  ctx.canvas.width = _width;
  ctx.canvas.height = _height;
  width = ctx.canvas.width;
  height = ctx.canvas.height;
}

//number input function
function numInput(num)   {       //ADD A DIGIT TO DISPLAY (kept as 'Current')
 {if (numStr.length > MAXLENGTH)
       { error = "Max Length Reached"; 
       } else
       { if (    (eval(numStr) == 0)
              && (numStr.indexOf(".") == -1)
            )
           { numStr = num;
           } else
           { numStr = numStr + num;
           };
    }; };
   calculator();
 }

//math operator function
function mathing(op) {
  if (op.indexOf("\u00D7") > -1) { operation = 1; mathOp = "\u00D7"};       // multiply
  if (op.indexOf("\u00F7") > -1) { operation = 2; mathOp = "\u00F7"};       // divide
  if (op.indexOf("\u002B") > -1) { operation = 3; mathOp = "\u002B"};       // add
  if (op.indexOf("\u2212") > -1) { operation = 4; mathOp = "\u2212"};       // subtract
  numStrMem = numStr;                
  numStr = "0";
  error = ''
  calculator();
 }

//calculate function
function calculate() { 
  if (operation == 1) { numStr = eval(numStrMem) * eval(numStr); };
  if (operation == 2) { numStr = eval(numStrMem) / eval(numStr); };
  if (operation == 3) { numStr = eval(numStrMem) + eval(numStr); };
  if (operation == 4) { numStr = eval(numStrMem) - eval(numStr); };
  operation = 0;                
  numStrMem = "0";  
  error = ''
  calculator();
 }

//input decimal function
function dot() {
  if (numStr.length == 0){ 
    numStr = "0.";
  } else {
    if (numStr.indexOf(".") == -1){
      numStr = numStr + ".";
    }
  };
  calculator();
 }

//draw calculator function
function calculator() {
    
  getContext(600, 400, calcCanvas);
  
  //button bounds
  const acBounds = mouseX > 0 && mouseX <= width / 4 && mouseY >= height / 6 && mouseY <= height / 6 + height / 6;
  const ceBounds = mouseX > width / 4 && mouseX <= width / 4 * 2 && mouseY >= height / 6 && mouseY <= height / 6 + height / 6;
  const diBounds = mouseX > width / 4 * 2 && mouseX <= width / 4 * 3 && mouseY >= height / 6 && mouseY <= height / 6 + height / 6;
  const myBounds = mouseX > width / 4 * 3 && mouseX <= width / 4 * 4 && mouseY >= height / 6 && mouseY <= height / 6 + height / 6;
  const subBounds = mouseX > width / 4 * 3 && mouseX <= width / 4 * 4 && mouseY >= height / 6 * 2 && mouseY <= height / 6 * 2 + height / 6;
  const addBounds = mouseX > width / 4 * 3 && mouseX <= width / 4 * 4 && mouseY >= height / 6 * 3 && mouseY <= height / 6 * 3 + height / 6;
  const eqBounds = mouseX > width / 4 * 3 && mouseX <= width / 4 * 4 && mouseY >= height / 6 * 4 && mouseY <= height / 6 * 4 + height / 6 * 2;
  const oneBounds = mouseX > 0 && mouseX <= width / 4 && mouseY >= height / 6 * 2 && mouseY <= height / 6 * 2 + height / 6;
  const twoBounds = mouseX > width / 4 && mouseX <= width / 4 * 2 && mouseY >= height / 6 * 2 && mouseY <= height / 6 * 2 + height / 6;
  const threeBounds = mouseX > width / 4 * 2 && mouseX <= width / 4 * 3 && mouseY >= height / 6 * 2 && mouseY <= height / 6 * 2 + height / 6;
  const fourBounds = mouseX > 0 && mouseX <= width / 4 && mouseY >= height / 6 * 3 && mouseY <= height / 6 * 3 + height / 6;
  const fiveBounds = mouseX > width / 4 && mouseX <= width / 4 * 2 && mouseY >= height / 6 * 3 && mouseY <= height / 6 * 3 + height / 6;
  const sixBounds = mouseX > width / 4 * 2 && mouseX <= width / 4 * 3 && mouseY >= height / 6 * 3 && mouseY <= height / 6 * 3 + height / 6;
  const sevenBounds = mouseX > 0 && mouseX <= width / 4 && mouseY >= height / 6 * 4 && mouseY <= height / 6 * 4 + height / 6;
  const eightBounds = mouseX > width / 4 && mouseX <= width / 4 * 2 && mouseY >= height / 6 * 4 && mouseY <= height / 6 * 4 + height / 6;
  const nineBounds = mouseX > width / 4 * 2 && mouseX <= width / 4 * 3 && mouseY >= height / 6 * 4 && mouseY <= height / 6 * 4 + height / 6;
  const zeroBounds = mouseX && mouseX <= width / 4 * 2 && mouseY >= height / 6 * 5 && mouseY <= height / 6 * 5 + height / 6;
  const decBounds = mouseX > width / 4 * 2 && mouseX <= width / 4 * 3 && mouseY >= height / 6 * 5 && mouseY <= height / 6 * 5 + height / 6;
 
  
  //draw Calculator

  //background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width, height);

  //screen
  ctx.fillStyle = scnColor;
  ctx.fillRect(0, 0, width, height / 6)
  
  //error messages
  if(error) {
    ctx.fillStyle = 'red';
    ctx.font = "15px Arial";
    ctx.textAlign = 'center';
    ctx.fillText(error, width/2, 20);
  }
 
  
  //number menory
  if(numStrMem != 0) {
    ctx.font = "20px Arial";
    ctx.textAlign = 'end';
    ctx.strokeText(numStrMem, width - 30, 23);
  }
  
  //math operator
  if(mathOp !== "" && numStrMem != "0") {
    ctx.strokeText(mathOp, width - 20, 40);
  }

  //screen numbers
  if(numStr.length > 11) {
    ctx.font = "20px Arial";
  } else {  
    ctx.font = calcFont;
  } 
  ctx.textAlign = 'end';
  ctx.strokeText(numStr, width - 30, height / 6 - 30);
  
  
  //re stating font
  ctx.font = calcFont;
  
  //AC button 
  if (acBounds) {
    ctx.fillStyle = clrHoverColor;
  } else {
    ctx.fillStyle = clrColor;
  };
  ctx.fillRect(0, height / 6, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText('AC', (width / 4) / 2, height / 6 + (height / 6) / 1.5)

  //CE button
  if (ceBounds) {
    ctx.fillStyle = clrHoverColor;
  } else {
    ctx.fillStyle = clrColor;
  };
  ctx.fillRect(width / 4, height / 6, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText('CE', (width / 4) + (width / 4) / 2, height / 6 + (height / 6) / 1.5);

  //Divide button
  if (diBounds) {
    ctx.fillStyle = btnHoverColor;
  } else {
    ctx.fillStyle = btnColor;
  };
  ctx.fillRect(width / 4 * 2, height / 6, width / 4, height / 6);
  ctx.font = calcFont;
  ctx.textAlign = 'center';
  ctx.strokeText("\u00F7", (width / 4) * 2 + (width / 4) / 2, height / 6 + (height / 6) / 1.5);

  //Multiply button
  if (myBounds) {
    ctx.fillStyle = btnHoverColor;
  } else {
    ctx.fillStyle = btnColor;
  };
  ctx.fillRect(width / 4 * 3, height / 6, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("\u00D7", (width / 4) * 3 + (width / 4) / 2, height / 6 + (height / 6) / 1.5);

  //Subtract button
  if (subBounds) {
    ctx.fillStyle = btnHoverColor;
  } else {
    ctx.fillStyle = btnColor;
  }
  ctx.fillRect(width / 4 * 3, height / 6 * 2, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("\u2212", (width / 4) * 3 + (width / 4) / 2, height / 6 * 2 + (height / 6) / 1.5);

  //Add button
  if (addBounds) {
    ctx.fillStyle = btnHoverColor;
  } else {
    ctx.fillStyle = btnColor;
  }
  ctx.fillRect(width / 4 * 3, height / 6 * 3, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("\u002B", (width / 4) * 3 + (width / 4) / 2, height / 6 * 3 + (height / 6) / 1.5);

  //Equal button 
  if (eqBounds) {
    ctx.fillStyle = btnHoverColor;
  } else {
    ctx.fillStyle = btnColor;
  }
  ctx.fillRect(width / 4 * 3, height / 6 * 4, width / 4, height / 6 * 2);
  ctx.textAlign = 'center';
  ctx.strokeText("\u003D", (width / 4) * 3 + (width / 4) / 2, height / 6 * 4.5 + (height / 6) / 1.5);

  //1 button
  if (oneBounds) {
    ctx.fillStyle = numHoverColor;
  } else {
    ctx.fillStyle = numColor;
  }
  ctx.fillRect(0, height / 6 * 2, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("1", (width / 4) / 2, height / 6 * 2 + (height / 6) / 1.5);

  //2 button
  if (twoBounds) {
    ctx.fillStyle = numHoverColor;
  } else {
    ctx.fillStyle = numColor;
  }
  ctx.fillRect(width / 4, height / 6 * 2, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("2", (width / 4) + (width / 4) / 2, height / 6 * 2 + (height / 6) / 1.5);

  //3 button
  if (threeBounds) {
    ctx.fillStyle = numHoverColor;
  } else {
    ctx.fillStyle = numColor;
  }
  ctx.fillRect(width / 4 * 2, height / 6 * 2, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("3", (width / 4) * 2 + (width / 4) / 2, height / 6 * 2 + (height / 6) / 1.5);

  //4 button
  if (fourBounds) {
    ctx.fillStyle = numHoverColor;
  } else {
    ctx.fillStyle = numColor;
  }
  ctx.fillRect(0, height / 6 * 3, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("4", (width / 4) / 2, height / 6 * 3 + (height / 6) / 1.5);

  //5 button
  if (fiveBounds) {
    ctx.fillStyle = numHoverColor;
  } else {
    ctx.fillStyle = numColor;
  }
  ctx.fillRect(width / 4, height / 6 * 3, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("5", (width / 4) + (width / 4) / 2, height / 6 * 3 + (height / 6) / 1.5);

  //6 button
  if (sixBounds) {
    ctx.fillStyle = numHoverColor;
  } else {
    ctx.fillStyle = numColor;
  }
  ctx.fillRect(width / 4 * 2, height / 6 * 3, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("6", (width / 4) * 2 + (width / 4) / 2, height / 6 * 3 + (height / 6) / 1.5);

  //7 button
  if (sevenBounds) {
    ctx.fillStyle = numHoverColor;
  } else {
    ctx.fillStyle = numColor;
  }
  ctx.fillRect(0, height / 6 * 4, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("7", (width / 4) / 2, height / 6 * 4 + (height / 6) / 1.5);

  //8 button
  if (eightBounds) {
    ctx.fillStyle = numHoverColor;
  } else {
    ctx.fillStyle = numColor;
  }
  ctx.fillRect(width / 4, height / 6 * 4, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("8", (width / 4) + (width / 4) / 2, height / 6 * 4 + (height / 6) / 1.5);

  //9 button
  if (nineBounds) {
    ctx.fillStyle = numHoverColor;
  } else {
    ctx.fillStyle = numColor;
  }
  ctx.fillRect(width / 4 * 2, height / 6 * 4, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("9", (width / 4) * 2 + (width / 4) / 2, height / 6 * 4 + (height / 6) / 1.5);

  //0 button
  if (zeroBounds) {
    ctx.fillStyle = numHoverColor;
  } else {
    ctx.fillStyle = numColor;
  }
  ctx.fillRect(0, height / 6 * 5, width / 4 * 2, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText("0", (width / 4), height / 6 * 5 + (height / 6) / 1.5);

  //decimal button
  if (decBounds) {
    ctx.fillStyle = numHoverColor;
  } else {
    ctx.fillStyle = numColor;
  }
  ctx.fillRect(width / 4 * 2, height / 6 * 5, width / 4, height / 6);
  ctx.textAlign = 'center';
  ctx.strokeText(".", (width / 4) * 2 + (width / 4) / 2, height / 6 * 5 + (height / 6) / 1.5);
  
  
  //cursor change to pointer when hover over
  if (mouseX >= 0 && mouseX <= width && mouseY >= height / 6 && mouseY <= height) {
    document.body.style.cursor = 'pointer';
  } else {
    document.body.style.cursor = "";
  }

  //button click listeners
  document.onclick = function() {
    if(oneBounds){numInput('1');}
    if(twoBounds){numInput('2');}
    if(threeBounds){numInput('3');}
    if(fourBounds){numInput('4');}
    if(fiveBounds){numInput('5');}
    if(sixBounds){numInput('6');}
    if(sevenBounds){numInput('7');}
    if(eightBounds){numInput('8');}
    if(nineBounds){numInput('9');}
    if(zeroBounds){numInput('0');}
    if(decBounds){dot();} 
    if(diBounds){mathing("\u00F7");}
    if(addBounds){mathing("\u002B");}
    if(myBounds){mathing("\u00D7");}
    if(subBounds){mathing("\u2212");}
    if(eqBounds){calculate();};
    if(acBounds){numStr = '0'; numStrMem = '0'; Operation = 0; error = ''; calculator();}
    if(ceBounds){numStr = '0'; error = '', calculator();} 
  };
   
  
  console.log(numStr.length, 'numstr length');   
  console.log(numStr, 'numstr');
console.log(numStrMem.length, 'numstrmem length');
  console.log(numStrMem, 'numstrmem');
}