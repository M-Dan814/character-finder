const Header = (props) => {
  return (
    <div className="header">
      <h1>Character Finder</h1>
      <h2>{props.hours < 10? "0" + props.hours: props.hours}: {props.minutes < 10? "0" + props.minutes: props.minutes}: {props.seconds < 10? "0" + props.seconds: props.seconds}</h2>
      <ul className="characters">
        {props.items.map((character) => {
          return (
            <li key={character.name}>
              <img alt={character.name} src={character.pic} height={50} />
              <span>{character.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Header };
