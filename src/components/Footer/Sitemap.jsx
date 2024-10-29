import React from 'react';

const sitemap = [
    {name: 'Home', path:'/'},
    {name: 'About us', path:'/about'},
    {name: 'Proyects', path:'/projects'},
    {name: 'Contact', path:'/contact'}
]

const Sitemap = () => {
    return (
        <ul className="footer-map">
            <h3>Sitemap:</h3>
            {sitemap.map(item => (
                <li key={item.name}><a href={item.path}>{item.name}</a></li>
            ))}
        </ul>
    );
};

export default Sitemap;