import React from "react";
import * as types from "./actiontype";

const initialState = {
    users: [],
    user:{},
    userss:[],
    searchResults: [],
    loading: true
}

const userReducers = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_USER:
            console.log("action.payload", action.payload);
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case types.DELETE_USER:
        case types.ADD_USER:
        case types.LOGIN_USER:
        case types.REGISTOR_USER:
        case types.UPDATE_USER:        
            return{
                ...state,
                loading: false, 
            }
        case types.GET_SINGLE_USER:
            return{
                ...state,
                user: action.payload,
                loading: false, 
            }
            case types.GETUSER_DATA:
                console.log("action.payload", action.payload);
                return {
                    ...state,
                    userss: action.payload,
                    loading: false,
                }
            case types.SEARCH_USER:
                return {
                    ...state,
                    users: action.payload
                };
        default: 
            return state;
    }
};

export default userReducers;