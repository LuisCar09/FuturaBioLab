import { createContext,useState } from "react";


export const ServiceContext = createContext()


const ServicesProvider = ({children}) =>{
    const [servicesFeatures,setServicesFeatures] = useState({
        uidOwner:'',
        uidBuyer: '',
        methodPayment:'',
        price:'',
        services :''
    })
    const servicesModifier = (value) =>{
        setServicesFeatures((prev) => {
            return {
                ...prev,value
            } 
            
        })
    }
    
    return (
        <ServiceContext.Provider value={{servicesFeatures,setServicesFeatures,servicesModifier}}>
            {children}
        </ServiceContext.Provider>
    )
}

export default ServicesProvider