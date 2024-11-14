import React from 'react';

const sitemap = [
    {name: 'Home', path:'/'},
    {name: 'About us', path:'/about'},
    {name: 'Proyects', path:'/projects'},
    {name: 'Contact', path:'/contact'}
]

const Sitemap = () => {
    return (
        <>
            <h3>Sitemap </h3>
            <ul className="footer--lists">
            {sitemap.map(item => (
                <li key={item.name}><a href={item.path}>{item.name}</a></li>
            ))}
        </ul>
        </>
    );
};

export default Sitemap;