import { createSlice } from "@reduxjs/toolkit";

const userSlice =  createSlice({
    name : "todo",
    initialState: {users: [],userKey:null,loader:true},
    reducers : {
        getUser(state,action){
            state.users = action.payload
            // state.loader = false
            
        },
        removeUser(state,action){
            state.users = state.users.filter(user => user.id !== action.payload)
            
        },
        deleteAllUser(state,action){
            return {users: [],userKey:null}
    
        },
        setLoader(state,action){
            
            state.loader = false
            console.log("loader in reducer",state.loader)

        },


        postUser(state,action){
            state.users.push(action.payload)

        },
        setUserKey(state,action){
            state.userKey = action.payload
        
            
        },
        editUser(state,action){

            state.users =  state.users.map(user => {
                if(state.userKey === user.id){
                    return action.payload
                }
                else{
                    return user
                }
            })
            state.userKey =  null
            


        }

    }
})

console.log(userSlice.actions);

export const {getUser,removeUser,deleteAllUser,setUserKey,editUser,postUser,setLoader} = userSlice.actions



export default userSlice.reducer