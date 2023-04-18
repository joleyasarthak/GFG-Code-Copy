export const createButton = () => {
  const button = document.createElement("button");
  button.textContent = "Copy";
  button.style.backgroundColor = "#FEFFFE";
  button.style.borderRadius = "5px";
  button.style.position = "absolute";
  button.style.margin = "20px";
  button.style.left = "80%";
  button.style.zIndex = "1";
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#A8DDA9";
    button.style.transition = "background-color 0.2s ease";
  });
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#FEFFFE";
  });
  button.onclick = () => {
    navigator.clipboard.writeText(removeComments(arr[i].innerText));
    alert("Copied Successfully");
  };
};
