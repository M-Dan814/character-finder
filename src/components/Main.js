import { useState } from "react";
import { DropDown } from "./DropDown";

const Image = require("./Images/images.jpg");

const Main = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const listDisplay = (event) => {
    setX(event.nativeEvent.offsetX);
    setY(event.nativeEvent.offsetY);
    const dropdown = document.querySelector(".dropdown");
    const targetter = document.querySelector(".target");
    if (dropdown.style.display !== "none" && targetter) {
      dropdown.style.display = "none";
      document.body.removeChild(targetter);
    } else {
      dropdown.style.display = "block";
      dropdown.style.left = event.pageX + "px";
      dropdown.style.top = event.pageY + "px";
      const target = document.createElement("div");
      target.classList.add("target");
      target.style.top = `${event.pageY - 45}px`;
      target.style.left = `${event.pageX - 45}px`;
      document.body.append(target);
    }
  };

  return (
    <div>
      <img alt="game" onClick={listDisplay} id="image" src={Image} />
      <DropDown x={x} y={y} />
    </div>
  );
};

export { Main };
