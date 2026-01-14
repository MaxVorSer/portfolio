import './Card.css';
import { useAutoFocus } from './ref';
import { useRef } from "react";

export const Card = ({
  id,
  title,
  onTitleChange,
  done,
  onToggle,
  onDelete,
  }) => {
  const handleTitleChange = (event) => {
    onTitleChange(id, event.target.value);
    };

  const handleCheckboxChange = () => {
    onToggle(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onToggle(id);
  };

  const handleTitleBlur = () => {
    if (title === '') {
      onDelete(id);
    }
  };

  
    const ref = useRef();
useAutoFocus(ref);

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input
        className="card__done"
        type="checkbox"
        checked={done}
        onChange={handleCheckboxChange}
        tabIndex={-1}
      />

      <input
        className="card__title"
        ref = {ref}
        type="text"
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
      />
    </form>
  );
};
