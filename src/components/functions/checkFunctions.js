

const checkerFunctions = {
    handleExistUser : async (userEmail) => {
        
        try {
            const response = await axios.get('http://localhost:8080/'  + 'users/useremail/' + userEmail)
            const data = response.data
        
            
            if (!data || Object.keys(data).length === 0) {
                return true
            }else{
               return false
               
                
            }    
        } catch (error) {
            console.error(error.message);
            
        }   
    }
}


export default checkerFunctions