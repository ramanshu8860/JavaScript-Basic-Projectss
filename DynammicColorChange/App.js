function changeColor(color) {
  let DynammicBox = document.getElementById("DynammicBox");
  DynammicBox.style.background = color;
}

var colors = ["maroon","darkGreen"];
let outputDiv = document.getElementById("dynamicallyCreated");
for (var i = 0; i < colors.length; i++) {
  var createButton = document.createElement("button");
  createButton.innerText = colors[i];
  createButton.classList.add("button");
  createButton.style.margin = "2px";
  createButton.style.padding = "2px";
  createButton.style.backgroundColor = colors[i];

  (function (color) {
    console.log("color is: ", color);
    item.onclick = () => {
      return changeColor(color);
    };
  })(colors[i]);
  outputDiv.appendChild(createButton);
}
