export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="Input Todo"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} className="action-button" onClick={onClick}>
        Add
      </button>
    </div>
  );
};
