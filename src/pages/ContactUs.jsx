import '../styles/ContactUs.css';
import { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <main className="main-contactus">
      <section className="section-contactus">
        <div className="contactus-container">
          <h1>Contact us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum inventore hic. Consectetur reiciendis ipsam nam, asperiores, aut, commodi dolor expedita neque.</p>
        
          <div className="contactus-wetalk">
          <h2>We talk</h2>
          </div>
        
        </div>
        
        

        <div className="contactus-info-container">
          <div className='contactus-info contactus-info--childrens'>

            <aside>
            <h2 className="contactus-title">Address</h2>
            <p>Example street, City</p>
            <p>example@info.com</p>


            <h2 className="contactus-title">Phone number</h2>
            <p>(123) 456 789</p>


            <h2 className="contactus-title">Social Media</h2>
            <div className='icons-container'>
              <FacebookIcon />
              <XIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
            </aside>

          </div> 

          <form className='contactus-form contactus-info--childrens' onSubmit={handleSubmit}>
            <div className='inputs-container'>

            <div className='contactus-form--inputname'>
              
              <div>
              <label htmlFor='input-name' >
                Name
              </label>
              <input
                  id='input-name'
                  type="text"
                  
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
              />
              </div>
            
            
            
              <div>
              <label htmlFor='input-lastname'>
               Last Name
              </label>
              <input
                  id='input-lastname'
                  type="text"
                 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
              />
              </div>
            
          </div>
          
          <div className='contactus-form--email'>
            <label htmlFor='input-email' >
            Email 
            </label>
              <input 
                id='input-email' 
                type="email"
                
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
          </div>
          
          <div className='contactus-form--textarea'>
            <label htmlFor='textarea' >
              Message
            </label>
              <textarea className='textarea'
              
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
          </div>
          <div className='button-container'>
           <button className='formbutton' type="submit">Send</button>
          </div>

            </div>
          </form> 

          <div className="contactus-image contactus-info--childrens">
            <img src="https://ericnoprotein.wordpress.com/wp-content/uploads/2014/09/agar-agar.jpg?w=640" alt="Example" />
          </div>
        </div>    
      </section>
    </main>
  );
}

export default ContactUs;
