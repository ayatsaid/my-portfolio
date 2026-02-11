import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const educationData = [
    {
        title: "Master of Computer Science",
        date: "2015 - 2016",
        institution: "Islamic University of Gaza",
        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
    },
    {
        title: "Bachelor of Computer Science",
        date: "2003 - 2009",
        institution: "Islamic University of Gaza",
        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
    },
    {
        title: "Certified Network Engineer(CNE)",
        date: "2009- 2010",
        institution: "Cisco, IEEE",
        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
    }
];

const experienceData = [
    {
        title: "Senior React-js developer",
        date: "Jan 2020 - Present",
        institution: "RamWorld, Saudi Arabia, Riyadh",
        description: "Princess Seetah bint Abdulaziz Award App : Developed secure web and mobile app foraward nominations and management."
    },
    {
        title: "Senior React Native developer",
        date: "Jan 2016 - present",
        institution: "ULTIMIT Advanced Turnkey Solutions, Palestine, Ramaallah",
        description: "Developed and maintained Eschool App and JoLearn App serving over 100,000+ users across Android and iOS."
    }
];

const TimelineItem = ({ item }) => (
    <div className="relative pl-8 pb-12 border-l border-gray-800 last:pb-0">
        {/* The Dot */}
        <div className="absolute -left-[6px] top-0 w-3 h-3 bg-[#0a0e17] border-2 border-gray-700 rounded-full"></div>

        <div className="space-y-2">
            <h4 className="text-[#facc15] text-xl font-semibold">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.date}</p>
            <h5 className="text-white text-lg font-medium">{item.institution}</h5>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                {item.description}
            </p>
        </div>
    </div>
);

const ResumeSection = () => {
    return (
        <section className="bg-[#0a0e17] text-white py-5 px-6 md:px-20 relative overflow-hidden">

            {/* Background Watermark */}
            <div className="relative flex flex-col items-center justify-center mb-16">
                <h1 className="absolute text-5xl md:text-7xl font-black text-white/[0.03]  font-san suppercase tracking-[12px] select-none">
                    RUSME
                </h1>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="text-2xl md:text-4xl font-bold text-[#ffb400] uppercase tracking-wider">
                        RUSME
                    </h3>
                </div>
            </div>
            {/* Grid Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Education Column */}
                <div>
                    <div className="flex items-center gap-4 mb-10">
                        <Briefcase className="text-gray-500 w-8 h-8" strokeWidth={1.5} />
                        <h3 className="text-3xl font-bold">Education</h3>
                    </div>
                    <div className="ml-4">
                        {educationData.map((item, index) => (
                            <TimelineItem key={index} item={item} />
                        ))}
                    </div>
                </div>

                {/* Experience Column */}
                <div>
                    <div className="flex items-center gap-4 mb-10">
                        <GraduationCap className="text-gray-500 w-8 h-8" strokeWidth={1.5} />
                        <h3 className="text-3xl font-bold">Experience</h3>
                    </div>
                    <div className="ml-4">
                        {experienceData.map((item, index) => (
                            <TimelineItem key={index} item={item} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ResumeSection;