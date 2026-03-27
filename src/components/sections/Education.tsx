"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

export default function Education() {
    const education = [
        {
            degree: "Bachelor of Technology (CSE)",
            institution: "Lovely Professional University, Punjab",
            duration: "2023 – Present",
            score: "CGPA: 7.61",
            description: "Focused on core Computer Science principles, Data Structures, Algorithms, and Machine Learning."
        },
        {
            degree: "Intermediate (12th)",
            institution: "Sant Nandlal Smriti Vidya Mandir, Jharkhand",
            duration: "Completed",
            score: "Percentage: 73%",
            description: "Science stream with mathematics framework."
        },
        {
            degree: "Matriculation (10th)",
            institution: "Ramkrishna Vivekananda International English School, Jharkhand",
            duration: "Completed",
            score: "Percentage: 83%",
            description: "Strong foundational education."
        }
    ];

    return (
        <section id="education" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Educational Journey" />

                <div className="relative mt-16">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-transparent" />

                    <div className="space-y-12 relative">
                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-[#030014] md:-translate-x-1/2 transform shadow-[0_0_15px_rgba(112,0,255,0.8)] z-10" />

                                <div className="w-full md:w-1/2 pl-12 md:pl-0 flex justify-center">
                                    <div className={`w-full max-w-sm glass-card p-6 rounded-2xl ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                        <span className="text-secondary-500 font-mono text-sm mb-2 block">{edu.duration}</span>
                                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                        <h4 className="text-gray-300 font-medium mb-4">{edu.institution}</h4>

                                        <div className="inline-block px-3 py-1 bg-white/10 rounded-lg text-sm font-semibold text-primary-300 mb-3">
                                            {edu.score}
                                        </div>

                                        <p className="text-gray-400 text-sm">{edu.description}</p>
                                    </div>
                                </div>

                                {/* Empty half for spacing on md+ */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
