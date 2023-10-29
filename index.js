var input = document.querySelector("#demo");
var button = document.getElementsByTagName("button");

for (let index = 0; index < button.length; index++) {
  button[index].addEventListener("click", function (event) {
    if (event.target.innerHTML === "=") {
      input.value = eval(input.value);
    } else {
      input.value = input.value + event.target.innerHTML;
    }
  });
}
