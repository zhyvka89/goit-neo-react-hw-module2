import { feedback_list, feedback_item, stats } from './FeedBack.module.css';

function Feedback({ types, totalFeedback, positiveFeedback }) {
  return (
    <>
      <ul className={feedback_list}>
        {Object.keys(types).map(type => {
          return (
            <li className={feedback_item} key={type}>
              <span>{type}: </span>
              <span>{types[type]}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <span>Total: </span>
        <span className={stats}>{totalFeedback}</span>
      </div>
      <div>
        <span>Positive: </span>
        <span className={stats}>{positiveFeedback}%</span>
      </div>
    </>
  );
}

export default Feedback;
