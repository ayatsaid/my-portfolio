import React from 'react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Front-End Development",
            icon: "fa-solid fa-pencil-ruler",
            description: "Building responsive and optimized web applications with modern frameworks.Html5,CSS3,JavaScript,React.js,Next.js",
            hasDot: true, // لإضافة النقطة الصفراء للكارت الأول فقط كما في الصورة
        },
        {
            id: 2,
            title: "ReactNative mobile & Reactjs web application",
            icon: "fa-solid fa-layer-group",
            description: "Crafting modern and maintainable UI components with efficient styling techniques.TailWindCss,CSS Modules,Styled Component,flex-box",
        },
        {
            id: 3,
            title: "State Management",
            icon: "fa-solid fa-box-archive",
            description: "Handling application state efficiently for scalable applications ContextApi ,Redux Toolkit, Component",
        },
        {
            id: 4,
            title: "Back-End Integration",
            icon: "fa-solid fa-mobile-screen-button",
            description: "Connecting front-end applications to databases and back-end services. API",
        },
        {
            id: 5,
            title: "Development Tools",
            icon: "fa-solid fa-clapperboard",
            description: "Optimizing workflows with modern development and build tools.Webpack ,ESLint , Prettier",
        },
        {
            id: 6,
            title: "Version Control & Deployment",
            icon: "fa-solid fa-display",
            description: "Managing code collaboration and deploying applications efficiently. Git , GitHub",
        },
    ];

    return (
        <section className="bg-[#070d1a] text-white py-24 px-6 md:px-16 lg:px-26 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto">

                {/* العناوين (العنوان الخلفي والأساسي) */}
                <div className="relative flex flex-col items-center justify-center mb-16">
                    <h1 className="absolute text-5xl md:text-7xl font-black text-white/[0.03]  font-san suppercase tracking-[12px] select-none">
                        SERVICE
                    </h1>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h3 className="text-2xl md:text-4xl font-bold text-[#ffb400] uppercase tracking-wider">
                            SERVICE
                        </h3>
                        <div className="w-12 h-[2px] bg-[#ffb400] mt-2"></div>
                    </div>
                </div>

                {/* شبكة الخدمات */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group bg-[#111623] p-10 border border-white/5 transition-all duration-300 hover:border-[#ffb400] hover:-translate-y-2 text-center"
                        >
                            {/* الأيقونة */}
                            <div className="relative w-20 h-20 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                <i className={`${service.icon} text-3xl text-white group-hover:scale-110 transition-transform duration-300`}></i>
                            </div>

                            {/* النص */}
                            <h4 className="text-[#ffb400] text-xl font-semibold mb-4 tracking-wide">
                                {service.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;