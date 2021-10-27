export const CompleteTodos = (props) => {
  const { completeTodos, onClickRevert } = props;
  return (
    <div className="complete-area">
      <p className="title">Complete Todo</p>
      <ul className="list">
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo} className="item">
              <div className="item-div">
                <p className="item-p">{todo}</p>
                <button
                  className="action-button"
                  onClick={() => onClickRevert(index)}
                >
                  Revert
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
