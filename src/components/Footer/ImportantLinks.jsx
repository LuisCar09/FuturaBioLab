import React from "react";

const importantLinks = [
    {name: 'Home', path:'/'},
    {name: 'About us', path: '/about'},
    {name: 'Contact us', path: '/contact'},
    {name:'Terms and Conditions', path: '/terms'}

]

const ImportantLinks = () => {
    return (
        <ul className="footer">
            <h3>Important Links:</h3>
            {importantLinks.map(link => (
                <li key={link.name}><a href={link.path}>{link.name}</a></li>
            ))}
        </ul>
    );
};



export default ImportantLinks