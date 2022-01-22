import { createSlice } from "@reduxjs/toolkit";



const slice=createSlice({
    name:'log',
    initialState:{
        user:null
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;    
        }
    }
})


export const selectUser=(state)=>state.log.user;

export const {login,logout} =slice.actions;
export default slice.reducer;