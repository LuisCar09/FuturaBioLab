import '../styles/Login.css';

function UserDataRegister() {
    return (
        <main className='main-login'>
            <section className='section-login'>
                <h1 className='title-login'>Create an account</h1>
                <form className='form-login'>
                    <div className='name-lastname-login'> 
                        <div className='name-input-login'>
                            <label htmlFor='name-input' className='label-login'>Name*</label>
                            <input id='name-input' type='text' required /> 
                        </div>
                        <div className='name-input-login'>
                            <label htmlFor='lastname-input' className='label-login'>Lastname*</label>
                            <input id='lastname-input' type='text' required />      
                        </div>           
                    </div> 
                    <div className='phone-date-login'> 
                        <div className='name-input-login'>
                            <label htmlFor='phone-input' className='label-login'>Phone*</label>
                            <input id='phone-input' type='text' required />   
                        </div>
                        <div className='name-input-login'>
                            <label htmlFor='birthDate-input' className='label-login'>Birthdate*</label>
                            <input id='birthDate-input' type='text' required /> 
                        </div>
                    </div> 
                    <div className='email-login'> 
                        <label htmlFor='email-input' className='email-login'>Email*</label>
                        <input id='email-input' type='email' required />      
                        <label htmlFor='password-input' className='email-login'>Password*</label>
                        <input id='password-input' type='text' required /> 
                        <label htmlFor='image-input' className='email-login'>Profile photo (optional)</label>
                        <input id='image-input' type='text' /> 
                    </div> 
                    <div className='preferneces-offers-login'> 
                        <div className='name-input-login'>
                            <label htmlFor='preferences-input' className='label-login'>Preferences (optional)</label>
                            <input id='preferences-input' type='text' />  
                        </div>
                        <div className='name-input-login'>
                            <label htmlFor='offers-input' className='label-login'>Offers (optional)</label>
                            <input id='offers-input' type='text' /> 
                        </div>
                    </div>
                </form>
                <h4>The fields marked with (*) are required</h4>
            </section>
        </main>
    );
}

export default UserDataRegister;
