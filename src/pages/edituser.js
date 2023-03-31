import  {useEffect, useState}  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { getSingleuser, Updateuser } from '../redux/action';

const Edituser = () => {

  const [state, setState] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
  });
  const [error, setError] = useState('');

  const {name, email, contact, address } = state;

  const history = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.data);
  console.log("user", user);
  const {id} = useParams();

  const handleinputchange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !contact) {
      setError("Please fill the input field")
    } else {
      dispatch(Updateuser(state, id));
      history("/");
      setError("");
    }
  }

  useEffect(() => {
    dispatch(getSingleuser(id));
  }, [])

  useEffect(() => {
    if (user) {
      setState(user); // update local state with fetched user data
    }
  }, [user]);

  return (
    <div>
      <h2>Edit user</h2>
      { error && <h3 style={{ color: "red" }}>{error}</h3> }
      <form
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handlesubmit}
      >
        <TextField id="filled-basic" label="Name  " type="text" value={name} name="name" onChange={handleinputchange} /> <br/>
        <TextField id="filled-basic" label="Email" type="email" value={email} name="email" onChange={handleinputchange} /><br/>
        <TextField id="filled-basic" label="contact" type="number" value={contact} name="contact" onChange={handleinputchange} /><br/>
        <TextField id="filled-basic" label="Address" type="text" value={address} name="address" onChange={handleinputchange} /><br/>
        <Button variant="contained" color="primary" type="submit">Update User</Button>
      </form>
      <div>
        <Button variant="contained" color="secondary" type="submit"
          onClick={() =>  history('/')
        } >
          Go Back
        </Button>
      </div>
    </div>
  )
}

export default Edituser
