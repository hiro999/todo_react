export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickDone, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">Incomplete Todos</p>
      <ul className="list">
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo} className="item">
              <div className="item-div">
                <p className="item-p">{todo}</p>
                <button
                  className="action-button"
                  onClick={() => onClickDone(index)}
                >
                  Done
                </button>
                <button
                  className="action-button"
                  onClick={() => onClickDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
