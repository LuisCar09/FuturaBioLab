import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";


const AutoLogout = ({timeout = 15 * 60 * 1000}) => {
    const auth = getAuth()
    let inactivityTimer;

    const autoSignOut = () => {
        const isUserAuth = auth.currentUser?.uid
        
        
        if (isUserAuth) {
            signOut(auth)
            localStorage.clear()
            window.location.reload()
            
        }
        
    }

    const resetTimer = () => {
        clearTimeout(inactivityTimer)
        inactivityTimer = setTimeout(autoSignOut,timeout)
        
        
            
    }

    useEffect(() => {
      //Reiniciamos el setTimeOut cada vez que ocurra estos eventos  
      window.addEventListener('mousemove',resetTimer)
      window.addEventListener('keydown',resetTimer)
      window.addEventListener('scroll',resetTimer)
      window.addEventListener('click',resetTimer)
        
      //iniciar el timer
      resetTimer()

      //Limpiamos los listener.
      return () => {
        clearTimeout(inactivityTimer)
        window.removeEventListener('mousemove',resetTimer)
        window.removeEventListener('keydown',resetTimer)
        window.removeEventListener('scroll',resetTimer)
        window.removeEventListener('click',resetTimer)

       } 

       
      
    }, [])
    

}

export default AutoLogout