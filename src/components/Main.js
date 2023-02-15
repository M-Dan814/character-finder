import { DropDown } from "./DropDown";

const Image = require("./Images/images.jpg");

const Main = () => {
  const listDisplay = (event) => {
    const dropdown = document.querySelector(".dropdown");
    const targetter = document.querySelector(".target")
    if (dropdown.style.display !== "none" && targetter) {
      dropdown.style.display = "none";
      document.body.removeChild(targetter)
    } else {
      dropdown.style.display = "block";
      dropdown.style.left = event.clientX + "px";
      dropdown.style.top = event.clientY + "px";
      const target = document.createElement("div");
      target.classList.add("target");
      target.style.top = `${event.clientY - 45}px`;
      target.style.left = `${event.clientX - 45}px`;
      document.body.append(target);
    }
  };

  return (
    <div>
      <img alt="game" onClick={listDisplay} id="image" src={Image} />
      <DropDown />
    </div>
  );
};

export { Main };
