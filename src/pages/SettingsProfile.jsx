import '../styles/SettingsProfile.css'
import HttpsIcon from '@mui/icons-material/Https';

function SettingsProfile(){
    return (
     <main className='main-settingsprofile'>
        <section className='section-settingsprofile'>
            <aside className='asidetop-settingsprofile'>
               <h1>Account settings</h1>
               <div className='navigationbar-settingsprofile'>
                 <a href='#' className='myaccount-settingsprofile'>My Account</a>
                 <a href='#' className='myaccount-settingsprofile'>My Wallet</a>
                 <a href='#' className='settings-settingsprofile'>Settings</a>
               </div>
            </aside>
            <aside className='asidebottom-settingsprofile'>
               <div className='account-container-settingsprofile'>
                 <div className='accounttitle-settingsprofile'>
                  <h2>Account</h2>
                  <p>Edit your personal information</p>
                 </div>
                 <div className='accounbuttons-settingsprofile'>
                    <button className='cancelbutton-settingprofile'> 
                        Cancel
                    </button>
                    <button className='updatebutton-settingprofile'> 
                        Update information
                    </button>
                 </div>       
              </div> 
              <div className='info-container-settingsprofile'>
                <h3>Information to display</h3>
                <p>This information will be visible to all users of this site</p>
                <form className='form-settingsprofile'>
                  <div className='name-container-settingsprofile'>
                  <div className='name-settingsprofile'>
                    <label htmlFor='label-name-settingsprofile'>
                    Visible name*
                    </label>
                    <input
                     id='input-name'
                     type='text'
                     required />
                  </div>
                  <div className='name-settingsprofile'>
                    <label htmlFor='label-settingsprofile'>
                    Nickname
                    </label>
                    <input
                     id='input-name'
                     type='text'
                     required />
                   </div> 

                   </div> 
                   <div className='personalinfo-settingsprofile'>
                     <h3>Personal information</h3>
                     <p>Update you personal information</p>
                     <label className='label-settingsprofile'>
                        Name
                     </label>
                     <input 
                       id='input-name'
                       type='text'
                      />
                      <HttpsIcon />
                      <label className='label-settingsprofile'>
                        Lastname
                     </label>
                     <input 
                       id='input-name'
                       type='text'
                      />
                      <HttpsIcon />
                    
                   </div> 
                   <div className='phone-settingprofile'>
                   <label className='label-settingsprofile'>
                        Phone number
                     </label>
                     <input 
                       id='input-name'
                       type='text'
                      />
                      <HttpsIcon />
   
                   </div>
                   <div className='accounbuttons-settingsprofile'>
                   <button className='cancelbutton-settingprofile'> 
                        Cancel
                    </button>
                    <button className='updatebutton-settingprofile'> 
                        Update information
                    </button>

                   </div>
                </form>
                
              </div>


            </aside>

        </section>

     </main>
    )
}

export default SettingsProfile


