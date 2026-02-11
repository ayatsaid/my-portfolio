import React, { useState, useEffect } from 'react';

const Mainbar = () => {

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
        <div className="bg-[#070d1a] flex flex-col lg:flex-row min-h-screen w-full overflow-hidden">
            {/* Left Content Section */}
            <div className="flex flex-col justify-center items-start w-full  lg:w-1/2 px-16 md:px-16 lg:px-24 xl:px-32 py-20 lg:py-0 z-10">
                <div className="mb-6">
                    <span className="text-xl md:text-2xl text-[#f5c75d] font-medium tracking-wide">Hello, I'm</span>
                </div>

                <h1 className="font-bold leading-none tracking-tight text-white mb-6">
                    <span className="block text-[clamp(3.5rem,8vw,7rem)]">AYAT</span>
                    <span className="block text-[clamp(3.5rem,8vw,7rem)]">A.SAID</span>
                </h1>

                <div className="mb-10">
                    <h6 className="text-2xl md:text-3xl text-gray-400 font-light tracking-wide">Software Engineer</h6>
                </div>

                <div>
                    <button className="text-base md:text-lg text-[#070d1a] font-semibold bg-[#f5c75d] hover:bg-[#e0b550] transition-colors rounded-full px-10 py-4 shadow-lg shadow-yellow-500/20">
                        Hire Me
                    </button>
                </div>

                <div className={"absolute bottom-0   left-1/2  -translate-x-1/2 flex gap-4   px-8 py-4 rounded-full bg-gray-800"}>
                    {['facebook', 'whatsapp', 'upwork', 'linkedin'].map(icon => (
                        <a
                            key={icon}
                            className="w-11 h-11 md:w-12 md:h-12
                                      flex items-center justify-center
                                      rounded-full border border-white/20
                                      text-white hover:bg-yellow-400 hover:text-black
                                      transition"
                        >
                            <i className={`fab fa-${icon}`}></i>
                        </a>
                    ))}
                </div>
            </div>

            {/* Right Image Section */}
            <div className={`w-full lg:w-1/2 h-[50vh] lg:h-auto relative  opacity-40  transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? 'translate-x-[120px]' : 'translate-x-0'}`}>
                <div className="absolute inset-0 bg-[url(/src/assets/test1.png)] bg-cover bg-center bg-no-repeat">
                    {/* Overlay gradient for better text readability if needed, or just style matching */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a] lg:from-transparent lg:to-transparent opacity-60 lg:opacity-0"></div>
                </div>
            </div>
        </div>
    );
};
export default Mainbar;