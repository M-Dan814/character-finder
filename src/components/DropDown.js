import { getDatabaseCoordinates } from "./firebase";

const DropDown = (props) => {

  // This function will be called when user clicks on a drop-down item 
  const getCoordinates = (event) => {
    let val = event.target.attributes.value.nodeValue;
    getDatabaseCoordinates(val).then((coordinates) => {
      let x = coordinates.x;
      let y = coordinates.y;
      // Check if the character is within the targetter
      if (
        x - props.x < 50 &&
        x - props.x > -50 &&
        y - props.y > -50 &&
        y - props.y < 50
      ) {
        // Change the state of Main to indicate that character has been found
        props.func(event.target.id);
        // Display a success box at the top of the screen
        document.querySelector("#alert").classList.remove()
        document.querySelector("#alert").innerHTML = `You found ${val}!`;
        document.querySelector("#alert").classList.add("success")
        // Remove success box after 3 secs
        setTimeout(() => {
          document.querySelector("#alert").classList.remove("success")
          document.querySelector("#alert").innerHTML = ""
        }, 3000)
      } else {
        // Display a failure box at top of screen
        document.querySelector("#alert").innerHTML = `Keep looking!`;
        document.querySelector("#alert").classList.add("failure");
        // Remove failure box after 3 secs
        setTimeout(() => {
          document.querySelector("#alert").classList.remove("failure")
          document.querySelector("#alert").innerHTML = ""
        }, 3000)
      }
    });
    // Remove targetter and dropdown
    const dropdown = document.querySelector(".dropdown");
    const target = document.querySelector(".target");
    target.remove();
    dropdown.style.display = "none";
  };
  return (
    // Dropdown list
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
