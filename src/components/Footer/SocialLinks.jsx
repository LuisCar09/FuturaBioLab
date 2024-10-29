import React from 'react';

const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    {name: 'Instagram', url:'https://instagram.com'}
];

const SocialLinks = () => {
    return (
        <ul className="footer">
            <h3>Social Media:</h3>
            {socialLinks.map(media => (
                <li key={media.name}><a href={media.url} target="_blank">{media.name}</a></li>
            ))}
        </ul>
    );
};

export default SocialLinks;