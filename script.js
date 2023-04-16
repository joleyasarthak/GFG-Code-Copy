// Remove Comments Logic
const removeComments = (string) => {
  return string
    .replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, " ")
    .replace(/^\s*\n/gm, " ")
    .replace("Copy", " ")
    .replace(/\u00A0/g, " ");
};

var arr = document.getElementsByClassName("code-container");

for (let i = 0; i < arr.length; i++) {
  const button = document.createElement("button");
  button.textContent = "Copy";
  button.onclick = () => {
    navigator.clipboard.writeText(removeComments(arr[i].innerText));
  };
  arr[i].appendChild(button);
  // arr[i].innerText = removeComments(arr[i].innerText);
}
