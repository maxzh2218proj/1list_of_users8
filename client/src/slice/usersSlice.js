import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    users: []
}

export const createUserAsync = createAsyncThunk("createUserAsync", async (user) => {
    const resp = await axios.post("http://localhost:5001/users", user)
    const response = await axios.get("http://localhost:5001/users")
    const {data} = response;
    return data
});
export const getAllUsersAsync = createAsyncThunk("getAllUsersAsync", async () => {
    const response = await axios.get("http://localhost:5001/users")
    const {data} = response;
    return data
});
export const deleteUserAsync = createAsyncThunk("deleteUserAsync", async (user) => {
    const resp = await axios.delete("http://localhost:5001/users/" + user.id)
    const response = await axios.get("http://localhost:5001/users")
    const {data} = response;
    return data
});
export const updateUserAsync = createAsyncThunk("updateUserAsync", async (user) => {
    const resp = await axios.put("http://localhost:5001/users/" + user.id,user)
    const response = await axios.get("http://localhost:5001/users")
    const {data} = response;
    return data
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUserAsync.fulfilled, (state, action)=>{
            state.users = action.payload;
        });
        builder.addCase(createUserAsync.rejected)
        builder.addCase(getAllUsersAsync.fulfilled, (state, action)=>{
            state.users = action.payload;
        });
        builder.addCase(deleteUserAsync.fulfilled, (state, action)=>{
            state.users = action.payload;
        })
        builder.addCase(updateUserAsync.fulfilled, (state, action)=>{
            state.users = action.payload
        })
    }
})

export default usersSlice.reducer