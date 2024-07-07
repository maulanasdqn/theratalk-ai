"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { TResetForm, schema } from "../_entities/schema";
import { resetAction } from "../_actions/reset-action";
import { Modal } from "@/components/ui/modal";
import { CheckIcon } from "@/components/svg-tsx/check-icon";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useNotifyStore } from "@/libs/store/notify";

export const ResetFormModule: FC = (): ReactElement => {
  const searchParams = useSearchParams();
  const params = useParams();
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const email = searchParams.get("email") || "";
  const token = (params.token as string) || "";
  const { push } = useRouter();
  const { setNotify, notify } = useNotifyStore();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TResetForm>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await resetAction({
      ...data,
      token,
      email,
    });

    if (res?.success) {
      setSuccessModal(true);
      setNotify({
        ...notify,
        show: true,
        type: "success",
        message: res?.success.message,
      });
    }

    if (res?.error) {
      setNotify({
        ...notify,
        show: true,
        type: "error",
        message: res?.error.message,
      });
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-[594px] p-6 bg-white shadow-md h-auto rounded-xl flex flex-col gap-y-6 justify-center"
    >
      <div className="flex flex-col gap-y-3">
        <h1 className="text-3xl font-bold">Reset Password</h1>
        <p className="text-gray-400 text-sm">
          Masukkan kata sandi baru anda di bawah ini dan ulangi sekali lagi untuk konfirmasi.
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
            <li>Mengandung kombinasi huruf besar, huruf kecil, angka, dan simbol.</li>
          </ul>
        </div>

        <Button disabled={!isValid}>Reset Kata sandi</Button>
        <div className="w-full flex justify-center">
          <div className="text-xs sm:text-sm text-gray-500">
            Sudah ingat akun anda?{" "}
            <Link className="text-green-700 text-xs sm:text-sm" href="/auth/login">
              Masuk Disini
            </Link>
          </div>
        </div>
      </div>
      <Modal
        icon={<CheckIcon />}
        onClose={() => setSuccessModal(false)}
        onOk={() => push("/auth/login")}
        okText="Ke Halaman Login"
        title="Reset Password Berhasil"
        content="Password anda berhasil diubah, silahkan menekan tombol di bawah ini untuk pergi ke halaman login"
        open={successModal}
      />
    </form>
  );
};
