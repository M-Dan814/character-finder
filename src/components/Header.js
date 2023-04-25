const Header = (props) => {
  return (
    <div className="header">
      <h1>Character Finder</h1>
     {/* Timer component*/}
      <h2>
        {props.hours < 10 ? "0" + props.hours : props.hours}:{" "}
        {props.minutes < 10 ? "0" + props.minutes : props.minutes}:{" "}
        {props.seconds < 10 ? "0" + props.seconds : props.seconds}
      </h2>
      {/* A dropdown which shows the characters required */}
      <div className="head-dropdown">
        <button className="dropbtn">Characters</button>
        <div className="dropdown-content">
          {props.items.map((character) => {
            return (
              <li key={character.name}>
                <img alt={character.name} src={character.pic} height={50} />
                <div>{character.name}</div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Header };
