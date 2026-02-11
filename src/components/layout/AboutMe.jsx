import React from 'react';

const AboutSection = () => {
    const personalInfo = [
        { label: "Birthday", value: "Aug 20, 1985" },
        { label: "Phone", value: "+972 567 423 294" },
        { label: "Email", value: "mm.raghed@gmail.com" },
        { label: "From", value: "2661 Hich meadow lane bear creek" },
        { label: "Language", value: "English, Arabic" },
        { label: "Freelance", value: "Available" },
        { label: "upwork", value: "Available" },
    ];

    return (
        <section className="bg-[#070d1a] text-white py-24 px-6 md:px-16 lg:px-26 min-h-screen font-sans">

            {/* العنوان العلوي */}
            <div className="relative flex flex-col items-center justify-center mb-24">
                <h1 className="absolute text-5xl md:text-7xl font-black text-white/[0.03]  font-san suppercase tracking-[12px] select-none">
                    ABOUT  ME
                </h1>
                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-2xl md:text-2xl font-bold text-[#fdb827] font-sans uppercase tracking-widest">
                        ABOUT ME
                    </h2>
                    {/* الخط الزخرفي */}
                    <div className="relative mt-3 flex items-center justify-center w-40 h-[2px]">
                        <div className="absolute w-full h-[1px] bg-gray-700"></div>
                        <div className="absolute w-14 h-[3px] bg-[#fdb827]"></div>
                    </div>
                </div>
            </div>

            {/* المحتوى: استخدام items-start للمحاذاة العلوية التامة */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* جهة اليسار: الصورة */}
                <div className="w-full h-[700px]">
                    <div className="relative  h-[600px] overflow-hidden rounded-sm shadow-2xl border border-white/5 ">
                        <div className="absolute inset-0 bg-[url(/src/assets/test2.png)] bg-cover bg-center bg-no-repeat">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a] lg:from-transparent lg:to-transparent opacity-60 lg:opacity-0"></div>
                        </div>
                    </div>
                </div>

                {/* جهة اليمين: النصوص والمعلومات */}
                <div className="flex flex-col space-y-7 h-[700px]" >
                    <div className="space-y-3">
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Hi There! I'm <span className="text-white">Ayat  Said</span>
                        </h3>
                        <h4 className="text-[#fdb827] text-xl font-medium tracking-wide">
                            Front-End Developer
                        </h4>
                    </div>

                    <p className="text-gray-400 text-[17px] leading-relaxed font-light border-b border-gray-800/50 pb-6">
                        Passionate and detail-oriented React Native & React.js Developer with over 8
                        years of experience in building cross-platform mobile applications for iOS and
                        Android. Expert in designing scalable, high-performance apps with strong UI/UX
                        focus, API integrations, and modern state management tools. Proven success
                        delivering robust solutions for international clients across education, automotive,
                        and e-commerce sectors.                    </p>
                    {/* قائمة البيانات الشخصية */}
                    <div className="space-y-4">
                        {personalInfo.map((info, index) => (
                            <div key={index} className="flex items-center text-[16px]">
                                <span className="w-28 md:w-32 font-semibold text-gray-200 shrink-0">{info.label}</span>
                                <span className="mx-4 text-gray-500">:</span>
                                <span className="text-gray-400 font-light">{info.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* زر التحميل */}
                    <div className="pt-4">
                        <button className="bg-[#fdb827] text-[#0a0d14] px-12 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#e5a622] transition-all duration-300 shadow-xl transform hover:-translate-y-1">
                            Download CV
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;