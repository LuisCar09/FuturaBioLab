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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum inventore hic. Consectetur reiciendis ipsam nam, asperiores, aut, commodi dolor expedita neque ex distinctio explicabo blanditiis cupiditate praesentium ea. Delectus?</p>
        </div>
        
        <div className="contactus-wetalk">
          <h2>We talk</h2>
        </div>
        
        <div className="contactus-info-container">
          <div className='contactus-info'>
               <div className='contactus-addrees'>
                 <span className="contactus-title">Address</span>
                 <p>Example street, City</p>
                 <p>example@info.com</p>
               </div>
            <div className='contactus-phone'>
            <span className="contactus-title">Phone number</span>
            <p>(123) 456 789</p>
            </div>
            <div className='socialmedia-icons'>
               <span className="contactus-title">Social Media</span>
               <div className='icons-container'>
                <FacebookIcon />
                <XIcon />
                <InstagramIcon />
                <LinkedInIcon />
               </div>
             </div>
          </div> 

          <form className='contactus-form' onSubmit={handleSubmit}>
            <div className='contactus-name'>
              <div className='name-input'>
                <label>
                  <span>Name</span>  
                  <input
                    type="text"
                    placeholder="Your first name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
              </div>
              
              <div className='name-input'>
                <label>
                 <span>Last Name</span> 
                  <input
                    type="text"
                    placeholder="Your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </label>
              </div>
            </div>
            
            <div className='name-input'>
              <label>
               <span>Email*</span> 
                <input 
                  type="email"
                  placeholder="Your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
            
            <div className='name-input'>
              <label>
                <span>Message</span>
                <textarea className='name-input textarea'
                  placeholder="Type your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className='button-container'>
             <button className='formbutton' type="submit">Submit</button>
            </div>
          </form> 

          <div className="contactus-image">
            <img src="https://ericnoprotein.wordpress.com/wp-content/uploads/2014/09/agar-agar.jpg?w=640" alt="Example" />
          </div>
        </div>    
      </section>
    </main>
  );
}

export default ContactUs;
