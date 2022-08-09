import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material'
import {DeleteOutlined} from '@mui/icons-material'
import React, { useState } from 'react'

function Todo(props) {
  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);
  const editItem = props.editItem;
  const deleteItem = props.deleteItem;


  // Todo 삭제
  const deleteEventHandler = ()=>{
    deleteItem(item);
  }
  // 체크박스
  const checkboxEventHandler = (e)=>{
    item.done = e.target.checked;
    editItem(item);
  }
  
  // Todo 수정=====================
  // 쓰기 설정
  const turnOffReadOnly = ()=>{
    setReadOnly(false);
  }
  // 입력 종료
  const turnOnReadOnly = (e)=>{
    if(e.key === "Enter"){
      setReadOnly(true);
      editItem(item);
    }
  }
  // 입력 시작
  const editEventHandler = (e)=>{
    let update = {...item, title:e.target.value};
    // console.log(update);
    setItem(update);
  }
  // Todo 수정=====================

  return (
    <ListItem>
      <Checkbox checked={item.done} 
        onChange={checkboxEventHandler}
      />
      <ListItemText>
        <InputBase
          inputProps={{readOnly:readOnly}}
          onClick={turnOffReadOnly}
          onChange={editEventHandler}
          onKeyDown={turnOnReadOnly}
          type='text'
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
          spellCheck={false}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          onClick={deleteEventHandler}
        >
          <DeleteOutlined/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    
  )
}

export default Todo