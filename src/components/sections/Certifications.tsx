"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Award } from "lucide-react";

export default function Certifications() {
    // Using the sequential PDF files you added in `public/` named certi-1.pdf ... certi-5.pdf.
    const driveFolder = "https://drive.google.com/drive/u/0/folders/1lWlW_Jic3jEd3sa7N6c73shfw_-IyCw-";

    const certs = [
        {
            title: "Privacy and Security in Online Social Media",
            issuer: "NPTEL",
            file: "certi-1.pdf",
            image: "certi-1.svg",
            highlight: true,
        },
        {
            title: "Mastering Data Structures & Algorithms using C and C++",
            issuer: "Udemy",
            file: "certi-2.pdf",
            image: "certi-2.svg",
            highlight: false,
        },
        {
            title: "ChatGPT-4 Prompt Engineering",
            issuer: "Udemy",
            file: "certi-3.pdf",
            image: "certi-3.svg",
            highlight: false,
        },
        {
            title: "The Bits and Bytes of Computer Networking",
            issuer: "Coursera",
            file: "certi-4.pdf",
            image: "certi-4.svg",
            highlight: false,
        },
        {
            title: "Introduction to Hardware and Operating Systems",
            issuer: "Coursera",
            file: "certi-5.pdf",
            image: "certi-5.svg",
            highlight: false,
        },
    ];

    return (
        <section id="certifications" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Certifications" subtitle="Continuous learning and upskilling." />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`glass p-6 rounded-2xl relative overflow-hidden group border ${cert.highlight ? "border-primary-500/50" : "border-white/5"
                                }`}
                        >
                            {cert.highlight && (
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_#7000FF] animate-pulse" />
                                </div>
                            )}
                            <a
                                href={driveFolder}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mb-4 rounded-xl overflow-hidden"
                                aria-label={`Open certificate: ${cert.title}`}
                            >
                                {cert.image ? (
                                    <img
                                        src={`/${cert.image}`}
                                        alt={`${cert.title} - ${cert.issuer}`}
                                        className="w-full h-44 object-cover rounded-xl shadow-md"
                                    />
                                ) : (
                                    <object
                                        data={`/${cert.file}`}
                                        type="application/pdf"
                                        className="w-full h-44 block"
                                    >
                                        <div className="w-full h-44 flex items-center justify-center bg-white/5 rounded-xl">
                                            <p className="text-gray-300">Open certificate</p>
                                        </div>
                                    </object>
                                )}
                            </a>

                            <div className="mb-4 text-secondary-500 bg-secondary-500/10 w-fit p-3 rounded-xl">
                                <Award className="w-6 h-6" />
                            </div>

                            <h3 className="text-lg font-bold text-white transition-colors mb-2">
                                <a
                                    href={driveFolder}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary-400"
                                >
                                    {cert.title}
                                </a>
                            </h3>
                            <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
