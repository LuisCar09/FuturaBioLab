import React from 'react';

const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    {name: 'Instagram', url:'https://instagram.com'}
];

const SocialLinks = () => {
    return (
        <>
            <h3>Social Media </h3>
            <ul className="footer--lists">
            {socialLinks.map(media => (
                <li key={media.name}><a href={media.url} target="_blank">{media.name}</a></li>
            ))}
        </ul>
        </>
    );
};

export default SocialLinks;