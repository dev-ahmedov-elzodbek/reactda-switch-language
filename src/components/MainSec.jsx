import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";


export default function MainSection({ lang }) {
  const { t } = useTranslation();
  const [productData, setProductData] = useState(null);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`https://json-api.uz/api/project/multi-languages/${lang}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => setProductData(res.data[0]))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [lang]);

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <img src="./error.png" alt="Error" className="w-40 h-40" />
      </div>
    );

  if (!productData) 
    return null;
  return (
    <section className="max-w-[1110px] mx-auto mt-40 px-6 flex flex-col gap-40">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-32">
        <div className="max-w-[540px] max-h-[560px] rounded-2xl flex justify-center bg-[#979797]">
          <img src="./Headphones.svg" alt={productData.name} className="w-full max-w-sm md:max-w-md" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          {productData.new && <span className="text-[#D87D4A] tracking-[2px] uppercase font-bold text-sm">New Product</span>}
          <h2 className="text-3xl md:text-4xl font-bold uppercase">{productData.name}</h2>
          <p className="text-gray-500 leading-7">{productData.description}</p>
          <span className="font-bold text-xl">${productData.price}</span>
          <div className="flex gap-4 items-center mt-6">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md gap-6">
              <button onClick={() => setCount((prev) => Math.max(prev - 1, 1))} className="text-xl font-bold">-</button>
              <span className="text-xl font-bold">{count}</span>
              <button onClick={() => setCount((prev) => prev + 1)} className="text-xl font-bold">+</button>
            </div>
            <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-6 py-3 uppercase font-bold transition">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12 md:gap-32">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-medium mb-4 uppercase">{t("FEATURES")}</h3>
          <p className="text-gray-500 text- leading-7 whitespace-pre-line">{productData.features}</p>
        </div>
        <div className="md:w-1/2 flex flex-col gap-3">
          <h3 className="text-3xl font-medium mb-4 uppercase">{t("INTHEBOX")}</h3>
          {productData.includes.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[#D87D4A] font-bold w-8">{item.quantity}x</span>
              <span className="text-gray-500">{item.item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
