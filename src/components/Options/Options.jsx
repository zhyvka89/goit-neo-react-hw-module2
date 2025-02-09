function Options({ types, handleFeedbackClick, totalFeedback, handleResetClick }) {
  return (
    <div>
      {Object.keys(types).map(type => {
        
        return (
          <button key={type} onClick={() => handleFeedbackClick(type)}>
            {type}
          </button>
        );
      })}
      {totalFeedback > 0 && <button onClick={() => handleResetClick()}>Reset</button>}
      
    </div>
  );
}

export default Options;
