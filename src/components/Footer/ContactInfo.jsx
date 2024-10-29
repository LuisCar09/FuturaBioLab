import React from "react";

const contactInfo = [
    {id:crypto.randomUUID(), label: 'Address', value: 'Example street, City'},
    {id:crypto.randomUUID(), label:'email', value: 'example@info.com'},
    {id:crypto.randomUUID(), label:'Phone', value: '(123) 456 789'}
]

const ContactInfo = () => {
    return (
        <ul className='footer-contact'>
        <h3>Contact Information:</h3>
        {contactInfo.map(contact => (
            <li key={contact.id}>{contact.label}: {contact.value}</li>
        ))}
    </ul>
    )
}

export default ContactInfo