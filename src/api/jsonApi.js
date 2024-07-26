import axios from "axios";
export const userData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };

  export const deleteUser = async (id)=>{
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log("deleted in api",response)
    } catch (error) {
        console.log(error)
        
    }

  }