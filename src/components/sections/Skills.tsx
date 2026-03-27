"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

export default function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "JavaScript", level: 85 },
                { name: "Python", level: 90 },
                { name: "C++", level: 80 },
                { name: "SQL", level: 85 },
                { name: "HTML & CSS", level: 90 },
            ],
        },
        {
            title: "Libraries & Frameworks",
            skills: [
                { name: "NumPy", level: 90 },
                { name: "Pandas", level: 90 },
                { name: "Scikit-learn", level: 80 },
                { name: "Matplotlib", level: 85 },
                { name: "React / Next.js", level: 75 },
            ],
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git & GitHub", level: 85 },
                { name: "Jupyter Notebook", level: 95 },
                { name: "Power BI", level: 75 },
                { name: "Excel", level: 80 },
            ],
        },
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-secondary-500/10 blur-[150px] -z-10 rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Technical Arsenal"
                    subtitle="A comprehensive toolkit of languages, frameworks, and analytical tools."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="glass p-8 rounded-3xl relative group overflow-hidden"
                        >
                            {/* Hover gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-glow transition-all">
                                {category.title}
                            </h3>

                            <div className="space-y-6 relative z-10">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                            <span className="text-sm text-primary-400 font-mono">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full relative"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: sIdx * 0.1 + 0.3, ease: "easeOut" }}
                                            >
                                                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
