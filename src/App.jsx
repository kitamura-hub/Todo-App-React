import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 未完了のTodo
  const [inCompleteTodos, setInCompleteTodos] = useState([
    "JavaScript Todo",
    "React Todo"
  ]);
  return (
    <React.Fragment>
      {/* 入力エリア */}
      <div className="input-area">
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      {/* 未完了エリア */}
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {inCompleteTodos.map((todo) => {
            return (
              // 変更の差分を検知するために付ける一意のkey
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      {/* 完了エリア */}
      <div className="complete-area">
        <p className="title">完了のTodo</p>
        <ul>
          <div className="list-row">
            <li>something Complete Todo</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};
