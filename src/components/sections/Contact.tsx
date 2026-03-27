"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-secondary-500/10 blur-[150px] -z-10 rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Side CV button removed — download moved to the Hero contact area */}
                <SectionHeading
                    title="Get in Touch"
                    subtitle="Looking for an intern or a full-time role? Let's discuss how my skills align with your goals."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
                        <p className="text-gray-400 text-lg mb-8">
                            I am currently open to internship and full-time opportunities where I can contribute to
                            machine learning, full-stack development, and data-driven solutions.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:sukendubesra@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Email</p>
                                    <p className="text-white font-medium group-hover:text-primary-400 transition-colors">
                                        sukendubesra@gmail.com
                                    </p>
                                </div>
                            </a>

                            <a href="tel:+916200547779" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary-500 group-hover:bg-secondary-500 group-hover:text-white transition-all">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                                    <p className="text-white font-medium group-hover:text-secondary-500 transition-colors">
                                        +91-6200547779
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Location</p>
                                    <p className="text-white font-medium">
                                        Punjab, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-8 rounded-3xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                                    placeholder="Internship Opportunity"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium resize-none"
                                    placeholder="Hello Sukendu, we have an opening for..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(112,0,255,0.4)] transition-all flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
