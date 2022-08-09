import { List, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const data = {
  items: [
    { id: '0', title: "리액트 컴포넌트 만들기 연습", done: true },
    { id: '1', title: "리액트 훅 useState 연습", done: false },
    { id: '2', title: "리액트 훅 useEffect 연습", done: true },
    { id: '3', title: "리액트 훅 useRef 연습", done: true },
    { id: '4', title: "리액트 훅 useMemo 연습", done: false },
    { id: '5', title: "리액트 훅 useReducer 연습", done: true },
  ]
};


function App() {
  // Todo 목록리스트
  const [items, setItems] = useState(data.items);

  // Todo 생성
  const addItem = (item)=>{
    item.id = "ID-" + items.length;
    item.done = false; // done  초기화
    setItems([...items, item]);
  }

  // Todo 수정
  const editItem = (item)=>{
    setItems([...items])
  }

  // Todo 삭제
  const deleteItem = (item)=>{
    // 삭제할 아이템 찾기
    const newItems = items.filter(todo => todo.id !== item.id);
    // 삭제할 아이템을 제외한 아이템 목록 다시 배열에 저장
    setItems([...newItems]);
  }

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <Paper style={{margin:16}}>
          <List>
            {
              items.map((element, idx)=>{
                return <Todo key={element.id}
                  item={element} editItem={editItem} deleteItem={deleteItem}
                />
              })
            }
          </List>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
