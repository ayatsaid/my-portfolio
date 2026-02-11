import React from 'react';
import { socialLinks } from '../../data/personal';

const iconMap = {
    FaGithub: 'fa-brands fa-github',
    FaLinkedin: 'fa-brands fa-linkedin-in',
    FaTwitter: 'fa-brands fa-twitter',
    FaEnvelope: 'fa-solid fa-envelope',
    FaBehance: 'fa-brands fa-behance',
    FaDribbble: 'fa-brands fa-dribbble',
    FaGlobe: 'fa-solid fa-globe',
    FaUpwork: 'fa-brands fa-upwork',
    FaWhatsapp: 'fa-brands fa-whatsapp',
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#070b14] border-t border-gray-800">
            <div className="container mx-auto px-4 py-10">
                {/* Social Links Section */}
                <div className="text-center mb-8">
                    <p className="text-gray-400 text-sm mb-5 tracking-wide">
                        Visit my social profile and get connected
                    </p>
                    <div className="flex justify-center items-center gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-[#f5c75d] hover:border-[#f5c75d] hover:text-[#0b101d] transition-all duration-300"
                                aria-label={link.name}
                            >
                                <i className={iconMap[link.icon] || 'fa-solid fa-link'}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-800 mb-6"></div>

                {/* Copyright */}
                <p className="text-center text-gray-500 text-sm tracking-wide">
                    © {currentYear}. Designed by{' '}
                    <a
                        href="#"
                        className="text-[#f5c75d] hover:text-[#ffd56b] transition-colors font-medium"
                    >
                        AyatSaid
                    </a>
                    . All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
