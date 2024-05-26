"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { TResetForm, schema } from "../_entities/schema";

export const ResetFormModule: FC = (): ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TResetForm>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-[594px] p-6 bg-white shadow-md h-auto rounded-xl flex flex-col gap-y-6 justify-center"
    >
      <div className="flex flex-col gap-y-3">
        <h1 className="text-3xl font-bold">Reset Password</h1>
        <p className="text-gray-400 text-sm">
          Masukkan kata sandi baru anda di bawah ini dan ulangi sekali lagi
          untuk konfirmasi.
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <Input
          control={control}
          name="password"
          type="password"
          placeholder="Masukkan kata sandi baru"
          required
          label="Kata sandi"
        />
        <Input
          control={control}
          type="password"
          name="confirmPassword"
          placeholder="Masukkan konfirmasi kata sandi baru"
          required
          label="Konfirmasi Kata sandi"
        />
        <div className="text-xs text-gray-500">
          Pastikan kata sandi anda :
          <ul className="list-disc px-6">
            <li>Minimal 8 karakter panjang.</li>
            <li>
              Mengandung kombinasi huruf besar, huruf kecil, angka, dan simbol.
            </li>
          </ul>
        </div>

        <Button disabled={!isValid}>Reset Kata sandi</Button>
        <div className="w-full flex justify-center">
          <div className="text-xs sm:text-sm text-gray-500">
            Sudah ingat akun anda?{" "}
            <Link
              className="text-green-700 text-xs sm:text-sm"
              href="/auth/login"
            >
              Masuk Disini
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};
