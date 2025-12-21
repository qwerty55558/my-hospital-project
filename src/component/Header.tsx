"use client";

// Removed Header.module.css import
import { useState, useEffect } from "react";
import NavMenu from "@/component/NavMenu";
import Logo from "@/component/Logo";
import SearchModal from "@/component/SearchModal";
import { HamburgerIcon, SearchIcon } from "@/component/HeaderIcons";
import { motion } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [shortcutSymbol, setShortcutSymbol] = useState("Ctrl");

    useEffect(() => {
        // Detect OS for shortcut hint
        if (typeof window !== "undefined") {
            const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
            setShortcutSymbol(isMac ? "⌘" : "Ctrl");
        }

        const handleGlobalKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };

        window.addEventListener("keydown", handleGlobalKeyDown);
        return () => window.removeEventListener("keydown", handleGlobalKeyDown);
    }, []);

    return (
        <>
            <div className="flex justify-between items-center px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] fixed top-0 left-0 right-0 select-none z-[100] transition-all duration-300">
                <Logo className="w-[50px] h-[50px] cursor-pointer drop-shadow-md hover:scale-105 transition-transform" />
                <div>
                </div>
                <div className="flex items-center gap-6">
                    <div
                        className="group relative flex items-center cursor-pointer transition-transform ease-in-out duration-300 hover:scale-110"
                        onClick={() => setIsSearchOpen(true)}
                    >
                        {/* Shortcut Badge: scale 없음, 색만 group-hover */}
                        <div className="hidden md:flex mr-3 px-2 py-1 rounded-md text-[10px] font-bold text-white bg-[#191F28] duration-300 group-hover:bg-[#00B8FF]">
                            <span className="opacity-80 mr-1">{shortcutSymbol}</span>
                            <span className="opacity-80 mr-1">+</span>
                            <span className="opacity-80">F</span>
                        </div>

                        {/* Search Icon: 색만 group-hover */}
                        <SearchIcon
                            className="w-7 h-7 md:w-8 md:h-8 text-[#191F28] transition-colors duration-300 group-hover:text-[#00B8FF]"
                        />
                    </div>

                    <HamburgerIcon
                        className="w-7 h-7 md:w-8 md:h-8 cursor-pointer text-[#191F28] z-[300] relative hover:text-[#00B8FF] hover:scale-110 transition-transform duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>
            </div>
            <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}