import { btn } from './Button.module.css';

function Button({ children, handleClick }) {
  return (
    <button className={btn} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
