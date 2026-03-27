import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#030014] py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

                <a href="#" className="text-3xl font-black tracking-tighter text-glow mb-6">
                    S.B<span className="text-primary-500">.</span>
                </a>

                <p className="text-gray-400 mb-8 max-w-md">
                    Designing intelligent solutions and writing clean code. Aspiring to make a positive impact through technology.
                </p>

                <div className="flex gap-6 mb-12">
                    <a href="https://github.com/Sukendu-Besra" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 hover:border-primary-500 transition-all">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/sukendu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-secondary-500 hover:border-secondary-500 transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:sukendubesra@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 hover:border-primary-500 transition-all">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Sukendu Besra. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
