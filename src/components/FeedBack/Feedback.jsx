function Feedback({ types, totalFeedback, positiveFeedback }) {
  
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
      <li>
        <span>Total:</span>
        <span>{totalFeedback}</span>
      </li>
      <li>
        <span>Positive:</span>
        <span>{positiveFeedback}%</span>
      </li>
    </ul>
  );
}

export default Feedback;
