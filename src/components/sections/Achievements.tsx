"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { Trophy, Code, Flame } from "lucide-react";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (inView) {
            let startTime: number;
            let animationFrame: number;

            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / (duration * 1000);

                if (progress < 1) {
                    setCount(Math.floor(from + (to - from) * progress));
                    animationFrame = requestAnimationFrame(animate);
                } else {
                    setCount(to);
                }
            };

            animationFrame = requestAnimationFrame(animate);

            return () => cancelAnimationFrame(animationFrame);
        }
    }, [inView, from, to, duration]);

    return <span ref={ref}>{count}</span>;
}

export default function Achievements() {
    const achievements = [
        {
            icon: <Code className="w-8 h-8 text-primary-400" />,
            count: 200,
            suffix: "+",
            label: "LeetCode Problems",
            desc: "Solved across various difficulty levels.",
        },
        {
            icon: <Flame className="w-8 h-8 text-secondary-500" />,
            count: 50,
            suffix: " Days",
            label: "Consistent Streak",
            desc: "Daily coding challenges conquered.",
        },
        {
            icon: <Trophy className="w-8 h-8 text-yellow-400" />,
            count: 1,
            suffix: "st",
            label: "HackerRank Gold Badge",
            desc: "Outstanding performance in Python.",
        },
    ];

    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-primary-500/10 blur-[150px] -z-10 rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Milestones"
                    subtitle="A track record of consistent growth and proven problem-solving abilities."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl text-center group font-medium"
                        >
                            <div className="inline-block p-4 bg-white/5 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <div className="text-5xl font-black text-white mb-2 flex justify-center items-center">
                                <Counter from={0} to={item.count} duration={2} />
                                <span className="text-secondary-500 ml-1">{item.suffix}</span>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-200 mb-2">{item.label}</h4>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
