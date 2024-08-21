import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (hover_index) => {
    setHoveredLink(hover_index);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div style={styles.socialSidebar}>
      {socialMediaLinks.map((link, hover_index) => (
        <a
          key={hover_index}
          href={link.url}
          target="_blank"
          style={{
            ...styles.link,
            backgroundColor: link.backgroundColor,
            width: hoveredLink === hover_index ? '65px' : '50px',
          }}
          onMouseEnter={() => handleMouseEnter(hover_index)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={link.icon} style={styles.icon} />
        </a>
      ))}
    </div>
  );
};

const socialMediaLinks = [
  { url: 'https://www.facebook.com/KautilyaSPP', backgroundColor: '#108beb', icon: faFacebook },
  { url: 'https://www.linkedin.com/school/kautilyaspp/', backgroundColor: '#0077b5', icon: faLinkedin },
  { url: 'https://twitter.com/KautilyaSPP', backgroundColor: '#1da1f2', icon: faTwitter },
  { url: 'https://www.instagram.com/kautilyaspp/', backgroundColor: '#e4405f', icon: faInstagram },
  { url: 'https://www.youtube.com/channel/UCfzky9XTJRvt15Rba1Crfhg', backgroundColor: '#cd201f', icon: faYoutube },
];

const styles = {
  socialSidebar: {
    position: 'fixed',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  link: {
    boxSizing: 'border-box',
    color: '#fff',
    textDecoration: 'none',
    padding: '15px 18px',
    display: 'flex',
    alignItems: 'center',
    transition: 'width 0.3s ease',
  },
  icon: {
    marginRight: '10px',
  },
};

export default SocialLinks;
