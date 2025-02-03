function Options({ types, handleClick }) {
  return (
    <div>
      {Object.keys(types).map(type => {
        console.log(types[type]);
        return (
          <button key={type} onClick={() => handleClick(type)}>
            {type}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
