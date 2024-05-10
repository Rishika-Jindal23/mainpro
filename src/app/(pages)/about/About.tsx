import React from "react";

const AboutUsPage = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        About Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        SkillSphere mission and values
                    </p>
                </div>
                <div className="mt-20 max-w-2xl mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-xl font-semibold text-gray-900">
                                    Our Mission
                                </p>
                                <p className="mt-3 text-base text-gray-500">
                                    At Skillsphere, our mission is to empower
                                    freelancers and individuals to connect,
                                    Empowering Freelancers ,Enabling
                                    Collaboration,Promoting Fairness and
                                    Transparency,Driving Innovation,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-xl font-semibold text-gray-900">
                                    Our Values
                                </p>
                                <p className="mt-3 text-base text-gray-500">
                                    Empowerment,
                                    Accessibility,Quality,Transparency,Community
                                    ,Innovation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
