import { getDatabaseCoordinates } from "./firebase";

const DropDown = (props) => {
  const getCoordinates = (event) => {
    let val = event.target.attributes.value.nodeValue;
    getDatabaseCoordinates(val).then((coordinates) => {
      let x = coordinates.x;
      let y = coordinates.y;
      let OriginalX = props.x;
      let OriginalY = props.y
      console.log(x, y)
      console.log(OriginalX, OriginalY)
      if(x - OriginalX < 50 && x - OriginalX > -50 && y-OriginalY > -50 && y - OriginalY < 50){
        console.log(true)
      }
      else{
        console.log(false)
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
        <li onClick={getCoordinates} value="waldo">
          Waldo
        </li>
        <li onClick={getCoordinates} value="twin">
          Odlaw
        </li>
        <li onClick={getCoordinates} value="sanders">
          Bernie Sanders
        </li>
      </ul>
    </div>
  );
};

export { DropDown };
