import Button from '/src/components/Button/Button';
import { btns_list } from './Options.module.css';

function Options({
  types,
  handleFeedbackClick,
  totalFeedback,
  handleResetClick,
}) {
  return (
    <div className={btns_list}>
      {Object.keys(types).map(type => {
        return (
          <Button key={type} handleClick={() => handleFeedbackClick(type)}>
            {type}
          </Button>
        );
      })}
      {totalFeedback > 0 && (
        <Button handleClick={handleResetClick}>Reset</Button>
      )}
    </div>
  );
}

export default Options;
