import React from 'react';

const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    {name: 'Instagram', url:'https://instagram.com'}
];

const SocialLinks = () => {
    return (
        <ul className="footer-social">
            <h3>Social Media:</h3>
            {socialLinks.map(media => (
                <li key={media.name}><a href={media.url} target="_blank" rel="noopener noreferrer">{media.name}</a></li>
            ))}
        </ul>
    );
};

export default SocialLinks;