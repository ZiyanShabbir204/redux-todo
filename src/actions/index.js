export const getUser = (users) => {
  return {
    type: "GETUSER",
    payload :users
  };
};

export const removeUser = (id) =>{
    return{
        type: "REMOVEUSER",
        payload:id
    }
}

export const setLoader = (action) =>{
    return{
        type: "SETLOADER",
        payload: action
    }
}

export const postUser = (user) => {
  return {
    type: "POSTUSER",
    payload : user

  };
};

export const setUserKey= (key)=>{
    return{
        type : "USERKEY",
        payload : key
    }
}
export const editUser = (user)=>{

    return{
        type: "EDITUSER",
        payload : user
    }

}
export const deleteAll = ()=>{
    return{
        type : "DELETEALL"
    }
}