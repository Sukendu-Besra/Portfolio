"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Code2, Brain, Database, LineChart } from "lucide-react";

export default function About() {
    const features = [
        {
            icon: <Brain className="w-6 h-6 text-primary-400" />,
            title: "Machine Learning",
            desc: "Building predictive models and data pipelines",
        },
        {
            icon: <Code2 className="w-6 h-6 text-secondary-500" />,
            title: "DSA & Problem Solving",
            desc: "Solved 200+ problems with robust algorithms",
        },
        {
            icon: <Database className="w-6 h-6 text-primary-400" />,
            title: "Data Engineering",
            desc: "Processing and structuring complex datasets",
        },
        {
            icon: <LineChart className="w-6 h-6 text-secondary-500" />,
            title: "Data Visualization",
            desc: "Creating actionable insights from raw data",
        },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeading
                    title="About Me"
                    subtitle="Passionate about building data-driven solutions and continuously improving coding expertise through real-world projects."
                />

                <div className="max-w-4xl mx-auto">
                    {/* Text/Content Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="prose prose-invert max-w-none text-gray-300 text-lg">
                            <p className="mb-4">
                                I am a Computer Science and Engineering student at Lovely Professional University,
                                with a strong foundation in Data Structures, Algorithms, and Machine Learning.
                            </p>
                            <p>
                                My journey in tech is driven by a fascination with how data can be transformed into intelligent,
                                actionable solutions. Whether it's crafting prediction models or optimizing complex algorithms,
                                I thrive on solving challenging problems.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <div className="mb-4 inline-block p-3 rounded-xl bg-white/5 border border-white/10">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
