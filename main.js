let button = document.getElementById("start-button");
let OperationPart = document.getElementById("math-operation");
let startPart = document.getElementById("start");
let buttonText = "Keyingisi";
let resultPart = document.getElementById("resultPart");
resultPart.style.display = "none";
let resultTexts = document.getElementById("resultTexts");

let count = 1;
let res = 0;
function MathTests() {
  let actions = ["+", "-", "*"];
  let action = actions[Math.floor(Math.random() * actions.length)];
  let number1 = Math.ceil(Math.random() * 10);
  let number2 = Math.ceil(Math.random() * 10);

  let number1Tag = document.getElementById("number1");
  let number2Tag = document.getElementById("number2");
  let actionTag = document.getElementById("action");

  number1Tag.innerText = number1 + " ";
  number2Tag.innerText = " " + number2;
  actionTag.innerText = action;
  if (action == "-") {
    res = (number1 - number2).toFixed(1);
  } else if (action == "+") {
    res = (number1 + number2).toFixed(1);
  } else {
    res = (number1 * number2).toFixed(1);
  }
  resultTag = 0;
}

let a = document.getElementById("umumiy");
let b = document.getElementById("cor");
let c = document.getElementById("icor");

function EndButton() {
  startPart.style = "display:block";
  OperationPart.style = "display:none";
  resultPart.style.display = "none";
}

function StartButton() {
  startPart.style = "display:none";
  OperationPart.style = "display:block";
  a.innerText = "";
  b.innerText = "";
  c.innerText = "";
  resultPart.style.display = "none";

  if (count < 6) {
    MathTests();
    count += 1;
  }
}

let correct = 0;
let incorrect = 0;
function NexOperation() {
  let resultTag = document.getElementById("result").value * 1;
  if (resultTag == res) {
    correct += 1;
  } else {
    incorrect += 1;
  }
  if (count < 6) {
    MathTests();
    if (count == 5) {
      buttonText.innerText = "Yakunlash";
    }
    count += 1;
  } else {
    OperationPart.style = "display:none";
    a.innerText = `Umumiy savollar soni : ${count - 1}`;
    b.innerText = `To'g'ri javoblar soni : ${correct}`;
    c.innerText = `Noto'g'ri javoblar soni : ${incorrect}`;

    if (correct == 5) {
      console.log("ppppppppppppppp");
      resultPart.style.display = "block";
      resultPart.style.color = "#009300"; //5
    }
    if (correct == 4) {
      resultPart.style.display = "block";
      resultPart.style.color = "#9DD566"; // 4
    }
    if (correct == 3) {
      resultPart.style.display = "block";
      resultPart.style.color = "#FEC401"; // 3
    }
    if (correct <= 2) {
      resultPart.style.display = "block";
      resultPart.style.color = "#FB0102"; // 2
    }
    correct = 0;
    incorrect = 0;
    count = 1;
  }
  document.getElementById("result").value = "";
}
