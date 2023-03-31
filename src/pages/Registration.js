import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Registor } from '../redux/action';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUP() {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
});
const [error, setError] = useState('');


const { name, email, password, number } = data;

const history = useNavigate();
const dispatch = useDispatch();



const handleinputchange = (e) => {
  let {name, value} = e.target;
  setData({...data, [name]: value});
}

const handlesubmit = (e) => {
  e.preventDefault();
   if(!name && !password && !email && !number) {
    setError("Please fill the input field")
   } else {
    dispatch(Registor(data));
    setError("");
   }
}


// const Registor = (data) => {
//   console.log("user", data);
//   axios.post('http://localhost:8002/register', data)
//     .then((resp) => {
//       console.log("resp", resp)
//     })
//     .catch(error => {
//       console.log("error-adduser", error);
//       throw error;
//     });
// }

// const handlesubmit = (e) => {
//   e.preventDefault();
//   console.log(data);
//   Registor(data);
// }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handlesubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleinputchange}
              id="name"
              label="Name"
              name="name"
              autoComplete="email"
              autoFocus
            />
             <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleinputchange}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleinputchange}
              id="Mobile"
              label="Mobile number"
              name="number"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleinputchange}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {history('/login'); }}
            >
              Log In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}