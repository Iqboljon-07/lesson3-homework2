let datasForTable = [
  "It is certain ",
  "Ask again later",
  "Don't count on it",
  "Yes,definitely",
  "My sources say no",
  "Outlook not so good",
  "signs point to yes",
  "Better not tell you now",
];

let form = document.querySelector("form");

let table = document.querySelector("table");
let button = document.querySelector("button");

function test() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let element = e.target;
    let text = element[0].value;
    if (text == "") {
      span.textContent = "Error!";
    } else {
      let resultindex = Math.floor(Math.random() * datasForTable.length);
      span.textContent = datasForTable[resultindex];
      let randomcolor = "#" + Math.random().toString(16).slice(2, 8);

      document.body.style.backgroundColor = randomcolor;
    }
  });
}

test();
let div = document.createElement("div");
document.body.appendChild(div);
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "20px";
let h1 = document.createElement("h1");

h1.textContent = "Answer:";
h1.style.color = "green";
let span = document.createElement("span");
span.style.color = "black";
span.style.fontSize = "20px";
div.append(h1, span);

div.classList.add("quti");
button.style.backgroundColor = "red";
button.style.border = "3px solid blue";
