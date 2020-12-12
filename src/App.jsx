import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css";

export const App = () => {
  // 入力箇所のstate化
  const [todoText, setTodoText] = useState([""]);
  // 未完了のTodo
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
  // 完了のTodo
  const [completeTodos, setCompleteTodos] = useState([]);

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
    setInCompleteTodos(newTodos); //未完了のTodoの更新
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    const newInCompleteTodos = [...inCompleteTodos];
    newInCompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]]; //現在の「完了のTodo」の中身, 完了ボタンを押された配列のインデックス
    setInCompleteTodos(newInCompleteTodos); //未完了のTodoの更新
    setCompleteTodos(newCompleteTodos); //完了のTodoの更新
  };

  // 戻すボタン
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...inCompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setInCompleteTodos(newIncompleteTodos);
  };

  return (
    <React.Fragment>
      {/* 入力エリア */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      {/* 未完了エリア */}
      <IncompleteTodos
        inCompleteTodos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/* 完了エリア */}
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </React.Fragment>
  );
};
