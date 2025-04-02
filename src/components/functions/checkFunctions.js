import axios from "axios"

const checkerFunctions = {
    handleExistUser : async (userEmail) => {
        
        try {
            const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB  + 'users/useremail/' + userEmail)
            const {user} = response.data
            
            
            
            if (!user) {
                return false
            }else{
               return true
               
                
            }    
        } catch (error) {
            console.error(error.message);
            
        }   
    }
}


export default checkerFunctions