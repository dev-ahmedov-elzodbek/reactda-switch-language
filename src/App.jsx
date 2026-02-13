import React, { useState } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSec";
import CtaSection from "./components/CTA";
import FooterSection from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("uz");
  return (
    <div className="font-sans text-gray-900">
      <Header lang={lang} setLang={setLang} />
      <MainSection lang={lang} />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
