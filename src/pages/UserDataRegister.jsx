// import '../styles/Login.css';
import '../styles/UserDataRegister.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function UserDataRegister({ setPhone,setUname,setLastName,setBirthdate,setNameUser,setOffers,setPreferences,functionCreateUser }) {
   
   const [userName, setUserName] = useState('');
  
   const [isUserAvailable, setIsUserAvailable] = useState(null); 


   const checkUserNameAvailability = async (username) => {
       
           try {
               const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users/username/' + username);
               if (response.data) {
                   setIsUserAvailable(false); 
               } else {
                   setIsUserAvailable(true);
               }
           } catch (error) {
               console.error(error.message);
           }
      
       }
   

   useEffect(() => {
       checkUserNameAvailability(userName); 
   }, [userName]);

   return (
    <main className='main-userdataregister'>
       <section className='register-sectioncomplement'>
           <h1 className='title-userDataRegister'>Create an account</h1>
           <form className='form-userDataRegister'>
               <div className='container-input-userDataRegister'>
                   <div className='info-input-userDataRegister'>
                       <label htmlFor='name-input' className='label-userDataRegister'>Name*</label>
                       <input id='name-input' type='text' required 
                       onChange={(e) => setUname(e.target.value)} 
                    />
                   </div>
                   <div className='info-input-userDataRegister'>
                       <label htmlFor='lastname-input' className='label-userDataRegister'>Lastname*</label>
                       <input id='lastname-input' type='text' required 
                        onChange={(e) => setLastName(e.target.value)} />
                   </div>
               </div>
               <div className='container-input-userDataRegister'>
                   <div className='info-input-userDataRegister'>
                       <label htmlFor='username-input' className='label-userDataRegister'>Username*</label>
                       <input   id='username-input' type='text' required 
                          
                           onChange={(e) => setNameUser(e.target.value)} 
                       />
                       {isUserAvailable === false && <p>The username already exists. Please choose another one</p>}
                       {isUserAvailable === true && <p>The username is available</p>}
                   </div>
               </div>
               <div className='container-input-userDataRegister'>
                   <div className='info-input-userDataRegister'>
                       <label htmlFor='phone-input' className='label-userDataRegister'>Phone*</label>
                       <input id='phone-input' type='text' required onChange={(e) => setPhone(e.target.value)} />
                   </div>
                   <div className='info-input-userDataRegister'>
                       <label htmlFor='birthDate-input' className='label-userDataRegister'>Birthdate*</label>
                       <input id='birthDate-input' type='text' required placeholder='YYYY/MM/DD' onChange={(e) => setBirthdate(e.target.value)} />
                   </div>
               </div>
               <div className='container-input-userDataRegister'>
                   <div className='info-input-userDataRegister'>
                       <label htmlFor='preferences-input' className='label-userDataRegister'>Preferences (optional)</label>
                       <input id='preferences-input' type='text' onChange={(e) => setPreferences(e.target.value)} />
                   </div>
                   <div className='info-input-userDataRegister'>
                       <label htmlFor='offers-input' className='label-userDataRegister'>Offers (optional)</label>
                       <input id='offers-input' type='text' onChange={(e) => setOffers(e.target.value)} />
                   </div>
               </div>
               <button className='button-userDataRegister' disabled={isUserAvailable === false} onClick={functionCreateUser}>Register</button>
           </form>
           <h4>The fields marked with (*) are required</h4>
       </section>
       </main>
   );

}
export default UserDataRegister;

