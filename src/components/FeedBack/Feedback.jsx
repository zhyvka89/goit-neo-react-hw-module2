function Feedback({ types }) {
  console.log(types);
  return (
    <ul>
      {Object.keys(types).map(type => {
        return (
          <li key={type}>
            <span>{type}:</span>
            <span>{types[type]}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Feedback;
