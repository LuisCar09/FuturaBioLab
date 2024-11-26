// import '../styles/Login.css';
import '../styles/UserDataRegister.css'
function UserDataRegister() {
    return (
        
            <section className='register-sectioncomplement'>
                <h1 className='title-userDataRegister'>Create an account</h1>
                <form className='form-userDataRegister'>
                    <div className='container-input-userDataRegister'> 
                        <div className='info-input-userDataRegister'>
                            <label htmlFor='name-input' className='label-userDataRegister'>Name*</label>
                            <input id='name-input' type='text' required /> 
                        </div>
                        <div className='info-input-userDataRegister'>
                            <label htmlFor='lastname-input' className='label-userDataRegister'>Lastname*</label>
                            <input id='lastname-input' type='text' required />      
                        </div>           
                    </div> 
                    <div className='container-input-userDataRegister'> 
                        <div className='info-input-userDataRegister'>
                            <label htmlFor='phone-input' className='label-userDataRegister'>Phone*</label>
                            <input id='phone-input' type='text' required />   
                        </div>
                        <div className='info-input-userDataRegister'>
                            <label htmlFor='birthDate-input' className='label-userDataRegister'>Birthdate*</label>
                            <input id='birthDate-input' type='text' required placeholder='DD/MM/YYYY'  /> 
                        </div>
                    </div> 
                     
                    <div className='container-input-userDataRegister'> 
                        <div className='info-input-userDataRegister'>
                            <label htmlFor='preferences-input' className='label-userDataRegister'>Preferences (optional)</label>
                            <input id='preferences-input' type='text' />  
                        </div>
                        <div className='info-input-userDataRegister'>
                            <label htmlFor='offers-input' className='label-userDataRegister'>Offers (optional)</label>
                            <input id='offers-input' type='text' /> 
                        </div>
                    </div>
                <button className='button-userDataRegister'>Register</button>
                </form>
                <h4>The fields marked with (*) are required</h4>
            </section>
        
    );
}

export default UserDataRegister;
