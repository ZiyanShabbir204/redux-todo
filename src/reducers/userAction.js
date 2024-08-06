const initialState = {users:[],loader:true}
export const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case "GETUSER": {
            console.log("user redux ziyan")
            return {...action,users:action.payload}

        }
        case "REMOVEUSER": {
            const filter = state.users.filter(user => user.id !== action.payload)
           
            // return {...action,users:filter}
            return {users:filter,loader:false}

        }
        case "SETLOADER" : {

            return {users:state.users,loader:action.payload}
        }

       

        case "EDITUSER" : {

            const users =  state.users.map(user => {
                if(action.payload.id === user.id){
                    return action.payload
                }
                else{
                    return user
                }
            })

            return {users:users,loader:false}

        }
        case "POSTUSER" : {
            const users = state.users
            users.push(action.payload)
            console.log("post user",users)

            return {users:users,loader:false}
        }
        case "DELETEALL" : {
            return {users:[],loader:false}
        }



        default: return state
    }
}