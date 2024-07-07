"use client";
import { GoogleIcon } from "@/components/svg-tsx/google-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { TRegisterForm, schema } from "../_entities/schema";
import { registerAction } from "../_actions/register-action";
import { ExclamationIcon } from "@/components/svg-tsx/exclamation-icon";
import { useRouter, useSearchParams } from "next/navigation";
import { useNotifyStore } from "@/libs/store/notify";
import { loginByGoogle } from "../../(login)/_actions/login-action";

export const RegisterFormModule: FC = (): ReactElement => {
  const { setNotify, notify } = useNotifyStore();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const emailParams = searchParams.get("email");
  const fullnameParams = searchParams.get("fullname");
  const fromParams = searchParams.get("from");
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TRegisterForm>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: emailParams || "",
      address: "",
      fullname: fullnameParams || "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const response = await registerAction(data, fromParams);
    if (response?.error) {
      setOpenModal(false);
      setNotify({
        ...notify,
        show: true,
        type: "error",
        message: response?.error?.message,
      });
    }

    if (response?.success) {
      setNotify({
        ...notify,
        show: true,
        type: "success",
        message: response?.success?.message,
      });
      push(`/auth/otp?email=${data.email}&type=register`);
    }
  });

  return (
    <form className="w-full max-w-[594px] p-6 bg-white shadow-md h-auto rounded-xl flex flex-col gap-y-6 justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{!!emailParams ? "Daftar dengan Google" : "Daftar"}</h1>
        <p className="text-sm">Lengkapi data untuk melanjutkan proses pendaftaran</p>
      </div>
      <div className="flex flex-col gap-y-4">
        <Input
          control={control}
          name="fullname"
          type="text"
          placeholder="Masukkan nama lengkap"
          required
          label="Nama Lengkap"
          readOnly={!!emailParams}
        />
        <Input
          control={control}
          name="address"
          type="text"
          placeholder="Masukkan alamat lengkap"
          required
          label="Alamat Lengkap"
        />
        <Input
          control={control}
          name="email"
          type="email"
          placeholder="Masukkan Email"
          required
          label="Email"
          autoComplete="email"
          readOnly={!!emailParams}
        />
        <div className="flex gap-x-4 w-full">
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Masukkan Kata Sandi"
            required
            label="Kata Sandi"
            autoComplete="new-password"
          />
          <Input
            control={control}
            name="confirmPassword"
            type="password"
            placeholder="Masukkan konfirmasi kata Sandi"
            required
            label="Konfirmasi Kata Sandi"
            autoComplete="new-password"
          />
        </div>
        <Button type="button" onClick={() => setOpenModal(true)} disabled={!isValid}>
          {!!emailParams ? "Lanjut Daftar dengan Google" : "Daftar"}
        </Button>
        <div className="w-full flex justify-center">
          <div className="text-xs sm:text-sm text-gray-500">
            Sudah Mempunyai Akun?{" "}
            <Link className="text-green-700 text-xs sm:text-sm" href="/auth/login">
              Masuk Disini
            </Link>
          </div>
        </div>
        {!emailParams && (
          <>
            <div className="flex relative my-3">
              <span className="text-sm text-gray-400 leading-5 left-1/2 translate-x-[-50%] flex justify-center bg-white absolute -top-3 z-10 px-1">
                Atau
              </span>
              <hr className="border absolute top-1/2 -translate-y-1/2 border-gray-300 w-full" />
            </div>
            <Button onClick={() => loginByGoogle()} variant="secondary">
              <GoogleIcon />
              Daftar dengan Google
            </Button>
          </>
        )}
      </div>

      <Modal
        icon={<ExclamationIcon />}
        onClose={() => setOpenModal(false)}
        onOk={onSubmit}
        okText="Selesaikan Registrasi"
        cancelText="Kembali"
        title="Apakah Data Sesuai?"
        content="Pastikan data yang anda masukkan sudah sesuai, data yang sudah disubmit tidak dapat diubah kembali"
        open={openModal}
      />
    </form>
  );
};
