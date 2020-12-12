import React from "react";

const style = {
  backgroundColor: "#c6ffe2",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodos = (props) => {
  const { inCompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">未完了のTodo</p>
      <ul>
        {inCompleteTodos.map((todo, index) => {
          return (
            // 変更の差分を検知するために付ける一意のkey
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
