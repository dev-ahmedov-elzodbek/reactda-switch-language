import { useTranslation } from "react-i18next";

export default function CtaSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="max-w-[1124px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h2 className="text-[32px] md:text-4xl font-bold uppercase leading-tight mb-6">
            Bringing you the <br /> <span className="text-[#D87D4A]">best</span> audio gear
          </h2>
          <p className="text-gray-600 leading-7 text-base md:text-lg">
            Located at the heart of New York City, Audiophile is the premier <br /> store for high end headphones, earphones, speakers, and audio <br /> accessories. We have a large showroom and luxury <br /> demonstration rooms available for you to browse and <br /> experience a wide range of our products. Stop by our store to <br /> meet some of the fantastic people who make Audiophile the <br /> best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="md:w-1/2 max-w-[540px] max-h-[588px] flex justify-center md:justify-end">
          <img src="./Bitmap.svg" alt="CTA Illustration" className="w-full max-w-sm md:max-w-md" />
        </div>
      </div>
    </section>
  );
}
