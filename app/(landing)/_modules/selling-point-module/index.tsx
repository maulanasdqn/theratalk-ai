import { Card } from "@/components/ui/card";
import { TCard } from "@/components/ui/card/type";
import { FC, ReactElement } from "react";

const contentCard: Array<TCard> = [
  {
    title: "Melakukan penilaian diri",
    content:
      "Pahami kondisi mental Anda dengan menyelesaikan tes dan kuesioner yang mudah digunakan.",
  },
  {
    title: "Mendapatkan Analisis AI",
    content:
      "Dapatkan saran yang dipersonalisasi berdasarkan data diri dan keluhan Anda, dianalisis dengan teknologi AI canggih.",
  },
  {
    title: "Temukan Bantuan Professional",
    content:
      "Temukan faskes dan psikolog terdekat yang sesuai dengan kebutuhan Anda dengan mudah.",
  },
  {
    title: "Pelajari Lebih Dalam",
    content:
      "Akses informasi dan edukasi terpercaya tentang berbagai topik kesehatan mental.",
  },
];

export const SellingPointModule: FC = (): ReactElement => {
  return (
    <section className="flex flex-col items-start gap-y-6 h-full bg-gray-50 max-h-2xl w-full justify-start px-6 py-20 max-w-7xl">
      <div className="w-full lg:gap-y-6 gap-y-4 flex flex-col justify-center h-full mt-8">
        <h1 className="lg:text-5xl leading-10 sm:text-3xl text-2xl font-bold text-green-700 w-full">
          Apa yang bisa <span className="text-green-900">dilakukan</span>
        </h1>
        <p className="lg:text-xl text-lg text-green-700 font-sans">
          Berikut fitur yang kami tawarkan untuk Anda
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 lg:grid-rows-2 gap-7 w-full">
        {contentCard.map((data, index) => (
          <Card key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </section>
  );
};
