import * as types from "./actiontype";
import axios from "axios";

const getUsers = (users) => ({
    type: types.GET_USER,
    payload: users,
});

const userDelete = () => ({
    type: types.DELETE_USER,
})

const userAdded = () => ({
    type: types.ADD_USER,
});

const Getuser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,
});

const userUpdated = () => ({
    type: types.UPDATE_USER,
});

const getUsersdatas = (userss) => ({
    type: types.GETUSER_DATA,
    payload: userss,
});

const searchUser = (users) => ({
    type: types.GET_USER,
    payload: users,
});

const Loginuser = () => ({
    type: types.LOGIN_USER,
});

const Registoruser = () => ({
    type: types.REGISTOR_USER,
});


export const loadUsers = () => {
    return  function (dispatch) {
        axios
        .get(`${process.env.REACT_APP_API}`)
        .then((resp) => {
            dispatch(getUsers(resp.data));
        }).catch(error => console.log(error));
    }
};


export const deleteUser = (id) => {
    return  function (dispatch) {
        axios
        .delete(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(userDelete());
            dispatch(loadUsers());
        }).catch(error => console.log("error", error));
    }
};

export const addUsers = (user) => {
    return  function (dispatch) {
        axios
        .post(`${process.env.REACT_APP_API}`, user)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(userAdded());
        }).catch(error => console.log("error-adduser", error));
    }
};

export const getSingleuser = (id) => {
    return  function (dispatch) {
        axios
        .get(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) => {
            console.log("resp2", resp.data)
            dispatch(Getuser(resp.data));
     
        }).catch(error => console.log("error", error));
    }
};

export const Updateuser = (user, id) => {
    return  function (dispatch) {
        axios
        .put(`${process.env.REACT_APP_API}/${id}`, user)
        .then((resp) => {
            dispatch(userUpdated());
     
        }).catch(error => console.log("error", error));
    }
};

export const getUsersdata = () => {
    return  function (dispatch) {
        axios
        .get(`${process.env.REACT_APP_API}`)
        .then((resp) => {
            console.log("resp.data2", resp.data.name);
            dispatch(getUsersdatas(resp.data));
        }).catch(error => console.log(error));
    }
};

export const searchUsers = (query) => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}?q=${query}`)
            .then((resp) => {
                dispatch(searchUser(resp.data));
            })
            .catch((error) => console.log(error));
    };
};
       

export const Login = (user) => {
    console.log("login:", user)
    return  function (dispatch) {
        axios
        .post('http://localhost:8002/login', user)
        .then((resp) => {
            const responce = resp.message;
            console.log("respss", resp.data.message)
            dispatch(Loginuser());
            alert(resp.data.message);
        }).catch(error => console.log("error-adduser", error));
    }
}
            
export const Registor = (user) => {
    console.log("login:", user)
    return  function (dispatch) {
        axios
        .post('http://localhost:8002/register', user)
        .then((resp) => {
            // console.log("resp", resp)
            dispatch(Registoruser());
        }).catch(error => console.log("error-adduser", error));
    }
}
   