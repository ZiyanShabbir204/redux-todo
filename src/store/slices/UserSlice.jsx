import { createSlice } from "@reduxjs/toolkit";

const userSlice =  createSlice({
    name : "todo",
    initialState: {users: [],userKey:null},
    reducers : {
        addUser(state,action){
            action.payload.map(user=> state.users.push(user))
            console.log("inside reducer",action.payload)
            

            
        },
        removeUser(state,action){
            state.users = state.users.filter(user => user.id !== action.payload)
            
        },
        deleteAllUser(state,action){
            return {users: [],userKey:null}
    
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

export const {addUser,removeUser,deleteAllUser,setUserKey,editUser,postUser} = userSlice.actions



export default userSlice.reducer