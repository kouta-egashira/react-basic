import { useState } from "react";

function App() {
  /**
   * todo = ステートの値
   * setTodo = ステートの値を更新する
   */
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([]);

  // TODOリストに入力項目を追加する関数
  const addTodoList = () => {
    if (!todo) return
    const newTodoList = [todo];
    // 配列（オブジェクト）に対して"イミュータブル"な操作で追加する
    setTodoList([newTodoList, ...todoList]);
    setTodo('');
  }

  return (
    <div>
      <h1>TODOタスク一覧</h1>
      <ul>
        {todoList.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
      <form onSubmit={(e) => {
          e.preventDefault();
          addTodoList();
        }}>

        <input 
          type="text" 
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input 
          type="submit"
          value="追加"  
          // addTodoList関数そのもの渡す
          // 実行自体はfrom要素のonSubmit()で実施する
          onSubmit={addTodoList}
        />
      </form>
    </div>
  );
}

export default App;