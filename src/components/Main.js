import { Items } from "./HeaderItems";
import { useState } from "react";
import { DropDown } from "./DropDown";
import { Header } from "./Header";
import { Form } from "./NameInput";
import { Box } from "./alerts";

const Image = require("./Images/images.jpg");

const Main = () => {
  const [x, setX] = useState(0); // X coordinates
  const [y, setY] = useState(0); // Y coordinates
  const [sec, setSec] = useState(0); // Timer secs
  const [hours, setHours] = useState(0); // Timer hours
  const [minutes, setMinutes] = useState(0); // Timer mins
  const [found, setFound] = useState([false, false, false]); // List to check if characters have been found

  // Change value if a character is found. Called in DropDown.js file
  const foundCharacter = (val) => {
    let newArray = [...found];
    newArray[val] = true;
    setFound(newArray);
    console.log(found);
  };

  // If every character has not been found, timer will increase every second
  if (found.every((x) => Boolean(x)) === false) {
    setTimeout(() => {
      if (sec < 59) {
        setSec(sec + 1);
      } else if (sec >= 59 && minutes < 59) {
        setSec(0);
        setMinutes(minutes + 1);
      } else {
        setSec(0);
        setMinutes(0);
        setHours(hours + 1);
      }
    }, 1000);
  } else {
    document.querySelector(".form").classList.remove("none");
    // Div is to create a greyed out effect
    const div = document.createElement("div");
    div.classList.add("grey");
    document.querySelector(".game").append(div);
  }

  const listDisplay = (event) => {
    // Change X and Y coordinates
    setX(
      Math.round(
        (event.nativeEvent.offsetX / event.nativeEvent.target.offsetWidth) * 100
      )
    );
    setY(
      Math.round(
        (event.nativeEvent.offsetY / event.nativeEvent.target.offsetHeight) *
          100
      )
    );
    const dropdown = document.querySelector(".dropdown");
    const targetter = document.querySelector(".target");
    // If dropdown and targetter are already on page, clicking will remove them else dropdown and targetter will be added to page
    if (dropdown.style.display !== "none" && targetter) {
      dropdown.style.display = "none";
      document.body.removeChild(targetter);
    } else {
      dropdown.style.display = "block";
      dropdown.style.left = event.pageX + "px";
      dropdown.style.top = event.pageY + "px";
      const target = document.createElement("div");
      target.classList.add("target");
      target.style.top = `${event.pageY - 115}px`;
      target.style.left = `${event.pageX - 45}px`;
      document.body.append(target);
    }
  };

  return (
    <div className="game">
      <Box />
      <Header hours={hours} minutes={minutes} seconds={sec} items={Items} />
      <div className="image-holder">
        <img alt="game" onClick={listDisplay} id="image" src={Image} />
      </div>
      <DropDown func={foundCharacter} x={x} y={y} />
      <Form hours={hours} minutes={minutes} seconds={sec} />
    </div>
  );
};

export { Main };
