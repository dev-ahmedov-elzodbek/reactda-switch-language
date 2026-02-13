import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
    { code: "uz", label: "O'zbek", flag: "🇺🇿" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "ko", label: "한국어", flag: "🇰🇷" },
    { code: "tr", label: "Türkçe", flag: "🇹🇷" },
    { code: "zh", label: "中文", flag: "🇨🇳" },
];

export default function Header({ lang, setLang }) {
    const { t, i18n } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleChange = (code) => {
        i18n.changeLanguage(code);
        setLang(code);
        setDropdownOpen(false);
    };

    const currentLang = LANGUAGES.find((l) => l.code === lang);

    return (
        <header className="w-full">
            <div className="max-w-[1124px] mx-auto bg-[#000000] text-white max-h-[98px]">
                <div className="px-6 py-6 flex items-center justify-between">
                <img src="./Logo.svg" alt="Logo" className="h-[25px]" />

                <nav>
                    <ul className="flex gap-8 h-[25px] uppercase font-sans">
                        <li>
                            <a href="#" className="hover:text-[#D87D4A] transition">{t("Home")}</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#D87D4A] transition">{t("HEADPHONES")}</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#D87D4A] transition">{t("SPEAKERS")}</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#D87D4A] transition">{t("EARPHONES")}</a>
                        </li>
                    </ul>
                </nav>

                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-2 bg-transparent border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                    >
                        <span>{currentLang.flag}</span>
                        <span>{currentLang.label}</span>
                        <span className="text-sm">&#9662;</span>
                    </button>

                    {dropdownOpen && (
                        <ul className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg w-36 z-20">
                            {LANGUAGES.map(({ code, label, flag }) => (
                                <li
                                    key={code}
                                    onClick={() => handleChange(code)}
                                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${code === lang ? "bg-[#D87D4A] text-white" : ""}`}
                                >
                                    <span className="mr-2">{flag}</span>
                                    {label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            </div>
        </header>
    );
}
