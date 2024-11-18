import '../styles/Setting.css';


function SettingsProfile() {
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
                        <div className='accountbuttons-settingsprofile'>
                            <button className='cancelbutton-settingsprofile'>
                                Cancel
                            </button>
                            <button className='updatebutton-settingsprofile'>
                                Update information
                            </button>
                        </div>
                    </div>

                    <div className='info-container-settingsprofile'>
                        <h3>Information to display</h3>
                        <p>This information will be visible to all users of this site</p>
                    </div>
                    <form className='form-settingsprofile'>
                        <div className='name-container-settingsprofile'>
                            <div className='name-settingsprofile'>
                                <label htmlFor='input-name' className='label-settingsprofile'>Visible name*</label>
                                <input
                                    id='input-name'
                                    type='text'
                                    required />
                            </div>
                            <div className='name-settingsprofile'>
                                <label htmlFor='input-nickcname' className='label-settingsprofile'>Title</label>
                                <input
                                    id='input-nickcname'
                                    type='text'
                                    required />
                            </div>
                        </div>

                        <div className='personalinfo-title-settingsprofile'>
                            <h3>Personal information</h3>
                            <p>Update your personal information</p>
                        </div>
                        <div className='personalinfo-input-settingsprofile'>
                            <div className='input--container-settingsprofile'>
                                <label className='label-settingsprofile'>Name</label>
                                <div className='input-name-settingsprofile'>
                                    <input id='input-name' type='text' />
                                    
                                </div>
                            </div>
                            <div className='input--container-settingsprofile'>
                                <label className='label-settingsprofile'>Lastname</label>
                                <div className='input-name-settingsprofile'>
                                    <input id='input-lastname' type='text' />
                                  
                                </div>
                            </div>
                        </div>
                        <div className='input--container-settingsprofile'>
                            <label className='label-settingsprofile'>Phone number</label>
                            <div className='input-name-settingsprofile'>
                                <input id='input-phone' type='text' />
                                
                            </div>
                        </div>

                        <div className='accountbuttons-bottom-settingsprofile'>
                            <button className='cancelbutton-settingsprofile'>
                                Cancel
                            </button>
                            <button className='updatebutton-settingsprofile'>
                                Update information
                            </button>
                        </div>
                    </form>
                </aside>
            </section>
        </main>
    );
}

export default SettingsProfile;



