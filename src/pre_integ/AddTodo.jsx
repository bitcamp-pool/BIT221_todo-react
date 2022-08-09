import React, { useState } from 'react'
import { Button, Grid, Paper, TextField } from '@mui/material'

function AddTodo(props) {
  // 사용자의 입력을 저장할 오브젝트
  const [item, setItem] = useState({title:''});
  const addItem = props.addItem;
  
  // onButtonClick 함수
  const onButtonClick = ()=>{
    addItem(item);
    setItem({title:''}); // 입력란 초기화
  }

  // onInputChange 함수
  const onInputChange = (e)=>{
    setItem({title:e.target.value});
  }

  // enterKeyEventHandler 함수
  const enterKeyEventHandler = (e)=>{
    if(e.key === 'Enter'){
      onButtonClick();
    }
  }

  return (
    <Paper style={{margin:16, padding:30}}>
      <Grid container>
        <Grid item xs={11} md={11} sm={11}>
          <TextField
            placeholder='Add Todo here'
            fullWidth
            value={item.title}
            onChange={onInputChange}
            onKeyPress={enterKeyEventHandler}
          />
        </Grid>
        <Grid item xs={1} md={1} sm={1}>
          <Button color='secondary' variant='text'
            style={{height:'100%'}}
            onClick={onButtonClick}
          >
          <i className="fa-solid fa-folder-plus" style={{fontSize:'2rem'}}></i>  
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default AddTodo