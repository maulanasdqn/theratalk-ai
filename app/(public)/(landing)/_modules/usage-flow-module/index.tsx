import { Card } from "@/components/ui/card";
import { TCard } from "@/components/ui/card/type";
import { FC, ReactElement } from "react";

const CustomHeader: FC<{ num: string }> = (props) => (
  <div className="bg-green-700 p-4 items-center flex justify-center font-bold text-1xl rounded-full text-white w-[50px] h-[50px]">
    {props.num}
  </div>
);

const data: Array<TCard> = [
  {
    title: "Daftar & Masuk",
    content:
      "Buat akun, dan masuk ke dashboard dengan menekan tombol “Masuk” di atas",
  },
  {
    title: "Lakukan Konsultasi Dengan AI",
    content:
      "Berkonsultasi dengan AI untuk mengetahui apa yang terjadi kepada anda, dan AI akan memberikan diagnosa, dan penanganan yang tepat.",
  },
  {
    title: "Kunjungi Fasilitas Kesehatan",
    content:
      "Mengunjungi Fasilitas Kesehatan yang direkomendasikan oleh AI, untuk penanganan lebih lanjut",
  },
];

export const UsageFlowModule: FC = (): ReactElement => {
  return (
    <section className="flex flex-col items-center gap-y-10 h-full bg-gray-50 max-h-2xl w-full justify-start px-6 py-20 max-w-7xl">
      <h1 className="lg:text-2xl text-xl p-3 rounded-xl font-semibold text-white bg-green-700">
        Alur Penggunaan TheraTalk AI
      </h1>

      <div className="grid gap-x-8 lg:grid-cols-3 grid-cols-1 lg:grid-rows-1 grid-rows-3 gap-y-4 w-full justify-evenly">
        {data.map((x, index) => (
          <Card
            key={index}
            customHeader={<CustomHeader num={String(index + 1)} />}
            title={x.title}
            content={x.content}
          />
        ))}
      </div>
    </section>
  );
};
