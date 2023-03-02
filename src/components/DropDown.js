import { getDatabaseCoordinates } from "./firebase";

const DropDown = (props) => {
  const getCoordinates = (event) => {
    let val = event.target.attributes.value.nodeValue;
    getDatabaseCoordinates(val).then((coordinates) => {
      let x = coordinates.x;
      let y = coordinates.y;
      if (
        x - props.x < 50 &&
        x - props.x > -50 &&
        y - props.y > -50 &&
        y - props.y < 50
      ) {
        props.func(event.target.id);
        document.querySelector("#alert").classList.remove()
        document.querySelector("#alert").innerHTML = `You found ${val}!`;
        document.querySelector("#alert").classList.add("success")
        setTimeout(() => {
          document.querySelector("#alert").classList.remove("success")
          document.querySelector("#alert").innerHTML = ""
        }, 3000)
      } else {
        document.querySelector("#alert").innerHTML = `Keep looking!`;
        document.querySelector("#alert").classList.add("failure")
        setTimeout(() => {
          document.querySelector("#alert").classList.remove("failure")
          document.querySelector("#alert").innerHTML = ""
        }, 3000)
      }
    });
    const dropdown = document.querySelector(".dropdown");
    const target = document.querySelector(".target");
    target.remove();
    dropdown.style.display = "none";
  };
  return (
    <div className="dropdown">
      <ul>
        <li onClick={getCoordinates} id="0" value="waldo">
          Waldo
        </li>
        <li onClick={getCoordinates} id="1" value="odlaw">
          Odlaw
        </li>
        <li onClick={getCoordinates} id="2" value="sanders">
          Bernie Sanders
        </li>
      </ul>
    </div>
  );
};

export { DropDown };
