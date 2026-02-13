import { useTranslation } from "react-i18next";

export default function FooterSection() {
  const { t } = useTranslation();

  return (
    <footer className="mt-40">
      <div className="max-w-[1124px] mx-auto bg-black text-gray-300">
      <div className="px-6 py-16 flex flex-col md:flex-row justify-between gap-12">
        
        <div className="md:w-1/2">
          <img src="./Logo.svg" alt="Footer Logo" className="h-[25px] mb-6" />
          <p className="text-gray-400 mb-6 leading-7 text-base md:text-lg">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team <br /> of music lovers and sound specialists who are devoted to helping you get the <br /> most out of personal audio. Come and visit our demo facility - we’re open 7 <br /> days a week.
          </p>
          <p className="font-bold text-gray-400 pt-10">Copyright 2021. All Rights Reserved</p>
        </div>

        <div className="max-w-[1110px] flex flex-col justify-between">
          <ul className="flex flex-wrap text-1 gap-10 mb-8 md:mb-12 uppercase font-medium">
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

          <div className="flex gap-4 justify-start md:justify-end pb-20">
            <img src="./Facebook.svg" alt="Facebook" className="h-6 w-6 hover:opacity-80 transition" />
            <img src="./Twitter.svg" alt="Twitter" className="h-6 w-6 hover:opacity-80 transition" />
            <img src="./Instagram.svg" alt="Instagram" className="h-6 w-6 hover:opacity-80 transition" />
          </div>
        </div>

      </div>
    </div>
    </footer>
  );
}
