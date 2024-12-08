import React from "react";

const importantLinks = [
    {name: 'Home', path:'/'},
    {name: 'About us', path: '/aboutus'},
    {name: 'Contact us', path: '/contactus'},
    {name:'Terms and Conditions', path: '/guide'}

]

const ImportantLinks = () => {
    return (
        <>
            <h3>Important Links </h3>
            <ul className="footer--lists">
            {importantLinks.map(link => (
                <li key={link.name}><a href={link.path}>{link.name}</a></li>
            ))}
        </ul>
        </>
    );
};



export default ImportantLinks