var input = document.querySelector("#demo");
var allButtonsArray = document.getElementsByTagName("button");

for (let index = 0; index < allButtonsArray.length; index++) {
  allButtonsArray[index].addEventListener("click", function (event) {
    if (event.target.innerHTML === "=") {
      input.value = eval(input.value);
    } else {
      input.value = input.value + event.target.innerHTML;
    }
  });
}
