"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] mix-blend-screen animate-blob" />
                <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-secondary-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob" style={{ animationDelay: "2s" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 backdrop-blur-md"
                    >
                        <span className="text-sm font-medium text-primary-400">Available for Opportunities</span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-500 to-primary-400 text-glow whitespace-nowrap" style={{ backgroundSize: "200% auto", animation: "gradient 3s linear infinite" }}>
                            Sukendu Besra
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-2xl mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        CSE Student | ML Enthusiast | Problem Solver
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl text-gray-400 italic mb-10 text-balance max-w-2xl mx-auto lg:mx-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        &quot;Turning Data into Intelligent Solutions&quot;
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white rounded-full font-medium transition-all hover:shadow-[0_0_30px_rgba(112,0,255,0.5)] overflow-hidden flex items-center gap-2"
                        >
                            <span className="relative z-10">View Projects</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                        </a>

                        <a
                            href="#contact"
                            className="group px-8 py-4 glass text-white rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            <span>Contact Me</span>
                        </a>

                        <a
                            href="https://drive.google.com/drive/u/0/folders/1XV1sdw82T1r4qKL6SUuCapgqhmdI8bLS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-primary-500 hover:text-white transition-all"
                            aria-label="Download CV"
                        >
                            <Download className="w-4 h-4" />
                            <span className="font-medium">Download CV</span>
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex gap-6 mt-16 text-gray-400 justify-center lg:justify-start w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <a href="https://github.com/Sukendu-Besra" target="_blank" rel="noreferrer" className="hover:text-white hover:text-glow-light transition-all">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com/in/sukendu" target="_blank" rel="noreferrer" className="hover:text-white hover:text-glow-light transition-all">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:sukendubesra@gmail.com" className="hover:text-white hover:text-glow-light transition-all">
                            <Mail className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>

                {/* Profile Picture Column */}
                <motion.div
                    className="flex-1 flex justify-center lg:justify-end w-full mb-12 lg:mb-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-[0_0_40px_rgba(112,0,255,0.3)] group z-10">
                        <Image
                            src="/prof.jpeg"
                            alt="Sukendu Besra"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.4)' }} />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-500/50 flex justify-center p-1">
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-primary-500"
                        animate={{
                            y: [0, 24, 0],
                            opacity: [1, 0, 1]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
