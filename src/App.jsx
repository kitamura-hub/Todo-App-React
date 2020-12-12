import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 入力箇所のstate化
  const [todoText, setTodoText] = useState([""]);
  // 未完了のTodo
  const [inCompleteTodos, setInCompleteTodos] = useState([
    "JavaScript Todo",
    "React Todo"
  ]);
  // 完了のTodo
  const [completeTodos, setCompleteTodos] = useState(["todos finished!!"]);

  // onChangeで変更された箇所がeventに渡ってくる。それをsetTodoTextに渡すことでvalueの値を変えている
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタン
  const onClickAdd = () => {
    // 入力エリアが空の状態は追加しない
    if (todoText === "") return;
    const newTodos = [...inCompleteTodos, todoText]; //現在のtodoに入力されたtodoを加える
    setInCompleteTodos(newTodos);
    setTodoText(""); //入力エリアの初期化
  };

  // 削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1); // splice(インデックス, 指定したインデックスからいくつ削除するのか)
    setInCompleteTodos(newTodos); //更新
  };

  return (
    <React.Fragment>
      {/* 入力エリア */}
      <div className="input-area">
        <input
          placeholder="Todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      {/* 未完了エリア */}
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              // 変更の差分を検知するために付ける一意のkey
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      {/* 完了エリア */}
      <div className="complete-area">
        <p className="title">完了のTodo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};
