import React from 'react';

const skills = [
    { name: "App Deployment (App Store & Google Play)", percentage: "95%" },
    { name: "UI/UX: Responsive Design Graphic", percentage: "95%" },
    { name: "Jira, Stash, Agile & Scrum", percentage: "90%" },
    { name: "Git-Hub", percentage: "90%" },
    { name: "Expo frame work, Redux Tool kit,RESTful APIs", percentage: "96%" },
    { name: "Mobile App Development", percentage: "90%" },
    { name: "html5,CSS3,JavaScript", percentage: "92%" },

];

const SkillsSection = () => {
    return (
        <section className="bg-[#0a0e17] text-white min-h-screen py-5 px-6 md:px-20 relative overflow-hidden">

            {/* Background Large Text */}
            <div className="relative flex flex-col items-center justify-center mb-16">
                <h1 className="absolute text-5xl md:text-7xl font-black text-white/[0.03]  font-san suppercase tracking-[12px] select-none">
                    SKILLS
                </h1>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="text-2xl md:text-4xl font-bold text-[#ffb400] uppercase tracking-wider">
                        SKILLS
                    </h3>
                    <div className="w-12 h-[2px] bg-[#ffb400] mt-2"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Content */}
                <div className="space-y-6 relative">

                    <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
                        All the skills that I have in that field of work are mentioned.
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                        dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt.
                    </p>
                </div>

                {/* Right Content - Skills Bars */}
                <div className="space-y-10">
                    {skills.map((skill, index) => (
                        <div key={index} className="group">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-bold tracking-wide uppercase">
                                    {skill.name}
                                </span>
                                <span className="text-[#facc15] font-semibold">
                                    {skill.percentage}
                                </span>
                            </div>
                            {/* Progress Line */}
                            <div className="h-[2px] w-full bg-gray-800 relative">
                                <div
                                    className="absolute top-0 left-0 h-full bg-[#facc15] transition-all duration-1000 ease-out"
                                    style={{ width: skill.percentage }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SkillsSection;