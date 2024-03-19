import React, { useEffect, useState } from 'react';
import '../../assets/css/Footer.css';
import logo from '../../assets/images/logo.jpg'; // Import your logo image
import { Link } from 'react-router-dom';

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.offsetHeight;

            // Adjust the value according to your preference
            const showThreshold = 0.9; // Show footer when scrolled 90% of the page

            if (scrollPosition > (bodyHeight - windowHeight) * showThreshold) {
                setShowFooter(true);
            } else {
                setShowFooter(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`Footer ${showFooter ? 'show' : ''}`}>
            <div className="left-section">
                {/* Logo */}
                <img src={logo} alt="Logo" className="logo" />
                {/* Content for the left section */}
                <p>Inhouse Medicare is the most trusted and leading provider of home healthcare services to people of all ages in Coimbatore. We provide timely, high-quality medical care as well as diagnostic services right at your front door.</p>
            </div>
            <div className="middle-section" style={{ width: '100%' }}>
    <h4>Quick Links</h4>
    <ul className="quick-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><Link to="/project/user/connect" className="connect">Plans</Link></li>
        
    </ul>

    <h4>Services</h4>
    <ul className="services">
        <li>Doctor Consultation</li>
        <li>Skilled Nursing Facilities</li>
        <li>Nursing services</li>
        <li>Trained Attendant Services</li>
        <li>Elder Care Services</li>
        <li>Palliative Care Services</li>
       
    </ul>
</div>

<div className="right-section">
    {/* Contact Us */}
    <h4>Contact Us</h4>
    <p>
        <strong>Address:</strong><br />
        Inhouse Medicare<br />
        123, Kalidas Road, Ram Nagar,<br />
        Coimbatore, Tamil Nadu, India, 641009.
    </p>
    <p>
        <strong>Call us:</strong><br />
        9489332220 / 0422 -4332220
    </p>
    <p>
        <strong>Mail:</strong><br />
        info@inhousemedicare.com
    </p>
</div>
</div>

    );
}

export default Footer;