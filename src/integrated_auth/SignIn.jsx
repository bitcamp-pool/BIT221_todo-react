import { Button, Grid, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React from 'react'
import { API_BASE_URL } from './api-config';

function SignIn() {

  function signin(userDTO){
    axios({
      method: 'post',
      url: API_BASE_URL + "/auth/signin",
      data: userDTO
    }).then((response)=>{
      alert(response.data.token);
    });
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const password = data.get("password");

    signin({username: username, password: password});
  }


  return (
    <Container component='main' maxWidth="xs" style={{marginTop:'8%'}}>
      <Grid container spacing={2} style={{marginBottom:'20px'}}>
        <Grid item xs={12}>
          <Typography component="h1" variant='h5'>
          <span>로그인</span>
          <i className="fa-solid fa-key"style={{marginLeft:'10px', color:'#ccc'}}></i>
          </Typography>
        </Grid>  
      </Grid>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='username'
              name='username'
              label="아이디"
              autoComplete='username'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='password'
              type='password'
              name='password'
              label="비밀번호"
              autoComplete='password'
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Signin
            </Button>
          </Grid>
        </Grid>
      </form>

    </Container>
  )
}

export default SignIn;