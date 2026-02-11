import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Prevent scrolling when menu is open
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    return (
        <header className={`sticky top-0 z-50  w-full  transition-all duration-300 ${isScrolled ? 'bg-[#0b101d]/95 backdrop-blur shadow-lg py-4' : 'bg-[#0b101d] py-6'}`}>
            <div className="container mx-auto flex justify-around items-center px-4 md:px-8">
                {/* Logo Section */}
                <div className="flex items-center gap-2 z-50">
                    <div className="text-[#f5c75d] text-2xl">
                        <i className="fa-solid fa-shapes"></i>
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">Ayat<span className="text-[#f5c75d]">Said</span></span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {['HOME', 'ABOUT', 'RESUME', 'PORTFOLIO', 'CONTACT'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-semibold text-gray-300 hover:text-[#f5c75d] transition-colors tracking-widest"
                        >
                            {item}
                        </a>
                    ))}
                    <div className="w-px h-4 bg-gray-300 mx-2"></div>
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <i className="fa-solid fa-phone text-[#f5c75d] group-hover:text-white transition-colors"></i>
                        <span className="font-medium text-gray-300 group-hover:text-[#f5c75d] transition-colors">+972-567423294</span>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white text-2xl focus:outline-none z-50"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} `}></i>
                </button>

                {/* Mobile Navigation Drawer */}
                <div className={`fixed inset-0 bg-[#0b101d] z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <nav className="flex flex-col items-center gap-8">
                        {['HOME', 'ABOUT', 'RESUME', 'PORTFOLIO', 'BLOG', 'CONTACT'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-2xl font-bold text-white hover:text-[#f5c75d] transition-colors tracking-widest"
                                onClick={toggleMenu}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-12 flex flex-col items-center gap-4">
                        <div className="w-16 h-1 bg-[#f5c75d] rounded-full"></div>
                        {/* <div className="flex items-center gap-3 text-white">
                            <i className="fa-solid fa-phone text-[#f5c75d]"></i>
                            <span className="font-medium text-xl">+972 567423294</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
