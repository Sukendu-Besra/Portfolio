"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
    {
        id: "traffic",
        title: "Traffic Prediction System",
        shortDesc: "ML-based system to predict hourly traffic volume.",
        description: "Developed a comprehensive machine learning pipeline to predict hourly traffic volume. Built robust regression models and applied extensive feature engineering, achieving an impressive 85% prediction accuracy. The system includes visualizations for peak and off-peak traffic patterns, yielding critical insights for urban planning.",
        tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
        github: "https://github.com/Sukendu-Besra/Data-science-project",
        color: "from-blue-500 to-primary-500",
        image: "/project_traffic.png",
        stats: [
            { label: "Accuracy", value: "85%" },
            { label: "Pipeline", value: "ML Regression" }
        ]
    },
    {
        id: "deadlock",
        title: "Deadlock Prevention Toolkit",
        shortDesc: "Banker's Algorithm visualization & detection.",
        description: "Implemented Banker's Algorithm tailored for deadlock prevention and detection. This educational toolkit features a real-time Resource Allocation Graph built with NetworkX, wrapped in an interactive GUI using Tkinter. It profoundly enhances the understanding of complex OS resource management concepts through immediate visual feedback.",
        tech: ["Python", "Tkinter", "NetworkX", "Matplotlib", "NumPy"],
        github: "https://github.com/Sukendu-Besra/OS-project",
        color: "from-secondary-500 to-emerald-500",
        image: "/project_deadlock.png",
        stats: [
            { label: "Algorithm", value: "Banker's" },
            { label: "GUI", value: "Tkinter" }
        ]
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="Showcasing analytical depth, algorithmic thinking, and full-stack capabilities."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="glass-card rounded-[2rem] overflow-hidden cursor-pointer group flex flex-col h-full"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Project Card Header Visual */}
                            <div className="h-48 relative overflow-hidden bg-[#0A0514] border-b border-white/5">
                                {project.image ? (
                                    <Image src={project.image} alt={project.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                                ) : null}
                                <div className={`absolute inset-0 opacity-40 mix-blend-overlay bg-gradient-to-br ${project.color}`} />
                                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-0 transition-opacity duration-300">
                                    {!project.image && <span className="text-4xl font-black text-white/10 tracking-widest">{project.title.substring(0, 4).toUpperCase()}</span>}
                                </div>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="absolute top-4 right-4 z-20"
                                >
                                    <div className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                                        <Github className="w-4 h-4" />
                                    </div>
                                </a>
                                {/* Overlay glow */}
                                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0F0A1A] to-transparent pointer-events-none" />
                            </div>

                            {/* Project Card Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 flex-1">{project.shortDesc}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.slice(0, 3).map((t) => (
                                        <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-[#0F0A1A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-300 hover:text-white transition-colors z-20"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="relative w-full h-48 bg-[#0A0514] overflow-hidden">
                                {selectedProject.image && (
                                    <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover opacity-50" />
                                )}
                                <div className={`absolute inset-0 bg-gradient-to-r ${selectedProject.color} opacity-40 mix-blend-overlay`} />
                                <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#0F0A1A] via-transparent to-transparent pointer-events-none" />
                            </div>

                            <div className="p-8 pt-6 relative z-10 -mt-6">
                                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>

                                <div className="flex gap-4 mb-8">
                                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
                                        <Github className="w-4 h-4" /> View Source
                                    </a>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {selectedProject.stats.map((stat, i) => (
                                        <div key={i} className="glass p-4 rounded-2xl">
                                            <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                                            <div className="text-lg font-semibold text-primary-400">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">About</h4>
                                    <p className="text-gray-300 leading-relaxed text-balance">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-primary-500/20 text-primary-300 border border-primary-500/30 rounded-full text-sm font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
