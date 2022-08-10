import { List, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

import axios from 'axios'
import {API_BASE_URL} from './api-config'
import NavBar from "./NavBar";


function App() {
  // Todo 목록리스트
  const [items, setItems] = useState([]);

  // Todo 목록 가져오기(GET 요청)
  useEffect(()=>{
    axios({
      method:'get',
      url:API_BASE_URL + '/todo',
    }).then((response)=>{
      setItems(response.data.resList);
    });
  }, []);

  // Todo 생성(POST 요청)
  const addItem = (item)=>{
    axios({
      method:'post',
      url:API_BASE_URL + '/todo',
      data: item,
    }).then((response)=>{
      setItems(response.data.resList);
    });
  }

  // Todo 수정(PUT 요청)
  const editItem = (item)=>{
    axios({
      method:'put',
      url:API_BASE_URL + '/todo',
      data:item
    }).then((response)=>{
      setItems(response.data.resList);
    });
  }

  // Todo 삭제(DELETE 요청)
  const deleteItem = (item)=>{
    axios({
      method:'delete',
      url:API_BASE_URL + '/todo',
      data:item
    }).then(response=>setItems(response.data.resList));
  }

  return (
    <div className="App">
      <NavBar/>
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
