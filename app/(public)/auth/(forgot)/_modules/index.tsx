"use client";
import { ForgotIllustration } from "@/components/svg-tsx/forgot-ill";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { TForgotForm, schema } from "../_entities/schema";
import { forgotAction } from "../_actions/forgot-action";
import { useRouter } from "next/navigation";

export const ForgotFormModule: FC = (): ReactElement => {
  const { push } = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TForgotForm>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await forgotAction(data.email);

    if (res?.success) {
      push(`/auth/otp?email=${data.email}&type=forgot`);
    }

    if (res?.error) {
      alert(res?.error.message);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-[594px] p-6 bg-white shadow-md h-auto rounded-xl flex flex-col gap-y-6 justify-center"
    >
      <div className="flex flex-col gap-y-3">
        <div className="w-full flex justify-center items-center">
          <ForgotIllustration />
        </div>
        <h1 className="text-3xl font-bold">Forgot Password</h1>
        <p className="text-gray-400 text-sm">
          Masukkan alamat email Anda di bawah ini dan kami akan mengirimkan kode OTP untuk mereset
          password Anda.
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <Input
          control={control}
          name="email"
          type="email"
          placeholder="Masukkan Email"
          required
          label="Alamat Email"
        />
        <Button disabled={!isValid}>Kirim Kode OTP</Button>
        <div className="w-full flex justify-center">
          <div className="text-xs sm:text-sm text-gray-500">
            Sudah ingat akun anda?{" "}
            <Link className="text-green-700 text-xs sm:text-sm" href="/auth/login">
              Masuk Disini
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};
