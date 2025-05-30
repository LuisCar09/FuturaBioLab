// import '../styles/Login.css';
import '../styles/UserDataRegister.css'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { auth } from '../../config/firebase';
import { deleteUser } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function UserDataRegister({ setPhone,setUname,setLastName,setBirthdate,setNameUser,setOffers,setPreferences,userNameUser ,functionReturnEmail, fieldsMarked,nameUser,uLastName='', goToDb, thirdPartyProvider }) {
    const navigate = useNavigate()
   const [isAvailableUsarName,setIsAvailableUsarName] = useState('')
   const [isClickedRegister,setIsClilkedRegister] = useState(false) 
   const [isUserAvailable, setIsUserAvailable] = useState(null); 
    
    
   const setTimoeOutRef = useRef(null) 
   const checkUserNameAvailability = async () => {
       
        try {
            const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users/username/' + isAvailableUsarName)
            
          
            
            if (!response.data[0]) {
                setIsUserAvailable(true)
                setUname(isAvailableUsarName)
               
                
            }else{
                
                setIsUserAvailable(false)
            }
            
        } catch (error) {
            console.error('error fetching data from server',error);
            
        }
        
      
       }
   const handlerRegister = () =>{
        !thirdPartyProvider ? functionCreateUser() : goToDb()
        
        setIsClilkedRegister(true)
   }

   useEffect(() => {
       checkUserNameAvailability(); 
   }, [isAvailableUsarName]);


   useEffect(()=>{
        const timeout = 5 * 60 * 1000
        setTimoeOutRef.current = setTimeout(async ()=>{
            await deleteUser(auth.currentUser)
            localStorage.clear()
           
            
            navigate('/')
            
        }, timeout)

        

        return () => clearTimeout(setTimoeOutRef.current)
   },[isClickedRegister])

   useEffect(()=>{
        if (isClickedRegister && setTimoeOutRef.current) {
            clearTimeout(setTimoeOutRef.current)
        }

   },[isClickedRegister])

   return (
    <main className='main-userdataregister'>
       <section className='register-sectioncomplement'>
           <h1 className='title-userDataRegister'>Create an account</h1>
           <form className='form-userDataRegister'>
               <div className='container-input-userDataRegister'>
                   <div className='info-input-userDataRegister'>
                       <label htmlFor='name-input' className='label-userDataRegister'>Name*</label>
                       <input id='name-input' type='text' required value={nameUser}  
                        onChange={(e) => setNameUser(e.target.value)} 
                    />
                   </div>
                   <div className='info-input-userDataRegister'>
                       <label htmlFor='lastname-input' className='label-userDataRegister'>Lastname*</label>
                       <input id='lastname-input' type='text' required value={uLastName}
                        onChange={(e) => setLastName(e.target.value)} />
                   </div>
               </div>
               <div className='container-input-userDataRegister'>
                   <div className='info-input-userDataRegister'>
                       <label htmlFor='username-input' className='label-userDataRegister'>Username*</label>
                       <input   id='username-input' type='text' required 
                       
                       onChange={(e) => setIsAvailableUsarName(e.target.value)} 
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
               <button className={!fieldsMarked ? 'button-userDataRegister' : 'button-userDataRegister active'} disabled={isUserAvailable === false} onClick={handlerRegister} type='button'>Register</button>
               <button className={!fieldsMarked ? 'button-userDataRegister active' : 'button-userDataRegister'}type="button" onClick={() => functionReturnEmail()} >Back</button>
           </form>
           <h4>The fields marked with (*) are required</h4>
       </section>
       </main>
   );

}
export default UserDataRegister;

