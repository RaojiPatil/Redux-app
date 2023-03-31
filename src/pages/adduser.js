import  {useState}  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { addUsers } from '../redux/action';
import SearchAppBar from './navbar';

const Adduser = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
        img: "",
    });
    const [error, setError] = useState('');

    const {name, email, contact, address, img } = data;
    const history = useNavigate();
    const dispatch = useDispatch();
    // const [file, setFile] = useState();

    // function handleChange(e) {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }
  

    const handleinputchange = (e) => {
      let {name, value} = e.target;
      setData({...data, [name]: value});
    }

    const handlesubmit = (e) => {
      e.preventDefault();
       if(!name || !email || !contact) {
        setError("Please fill the input field")
       } else {
        dispatch(addUsers(data));
        history("/");
        setError("");
       }
    }


  return (
    <div>
          <SearchAppBar />
      <h2>Add user</h2>
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
            <TextField id="filled-basic" type="file" value={img} name="img" onChange={handleinputchange} /><br/>
            <Button variant="contained" color="primary" type="submit">Add User</Button>
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

export default Adduser
