import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { API_BASE_URL } from './api-config';

function SignUp() {
  let navi = useNavigate();

  function signup(userDTO) {
    axios({
      method: 'post',
      url: API_BASE_URL + "/auth/signup",
      data: userDTO  
    })
    .then((response)=>{
      // 계정 생성 성공 시 signin 페이지로 리디렉트
      navi("/signin");
    });
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const password = data.get("password");

    signup({username: username, password: password});
  }

  return (
    <Container component='main' maxWidth="xs" style={{marginTop:'8%'}}>
      <Grid container spacing={2} style={{marginBottom:'20px'}}>
        <Grid item xs={12}>
          <Typography component="h1" variant='h5'>
          <span>계정생성</span>
          <i className="fa-solid fa-user-pen"style={{marginLeft:'10px', color:'#ccc'}}></i>
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
              autoFocus
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
              create account
            </Button>
          </Grid>

          <Grid item xs={12}>
          <i className="fa-solid fa-bell" style={{color:'crimson', marginRight:'5px'}}></i>
          <Link to="/signin" variant="body2" style={{textDecoration:'none', color:'steelblue'}}>
            <span>Already have an account? Please log in here</span>
          </Link>
          </Grid>
          
        </Grid>
      </form>

    </Container>
  )
}

export default SignUp