"use client";
import { GoogleIcon } from "@/components/svg-tsx/google-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { TLoginForm, schema } from "../_entities/schema";
import { loginByCredentials, loginByGoogle, logout } from "../_actions/login-action";
import { useNotifyStore } from "@/libs/store/notify";
import { useRouter } from "next/navigation";

export const LoginFormModule: FC = (): ReactElement => {
  const { push } = useRouter();
  const { setNotify, notify } = useNotifyStore();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TLoginForm>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await loginByCredentials(data);
    if (res.success) {
      setNotify({
        ...notify,
        show: true,
        type: "success",
        message: res?.success?.message as string,
      });
      push("/dashboard");
    }

    if (res.error) {
      setNotify({
        ...notify,
        show: true,
        type: "error",
        message: res?.error?.message as string,
      });
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-[594px] p-6 bg-white shadow-md h-auto rounded-xl flex flex-col gap-y-6 justify-center"
    >
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Login</h1>
      </div>
      <div className="flex flex-col gap-y-4">
        <Input
          control={control}
          name="email"
          type="email"
          placeholder="Masukkan Email"
          required
          label="Email"
        />
        <Input
          control={control}
          name="password"
          type="password"
          placeholder="Masukkan Kata Sandi"
          required
          label="Kata Sandi"
        />
        <div className="w-full flex justify-end">
          <Link className="text-xs sm:text-sm font-semibold text-green-700" href="/auth/forgot">
            Lupa kata sandi?
          </Link>
        </div>
        <Button disabled={!isValid}>Masuk</Button>
        <div className="w-full flex justify-center">
          <div className="text-xs sm:text-sm text-gray-500">
            Belum Mempunyai Akun?{" "}
            <Link className="text-green-700 text-xs sm:text-sm" href="/auth/register">
              Daftar Disini
            </Link>
          </div>
        </div>
        <div className="flex relative my-3">
          <span className="text-sm text-gray-400 leading-5 left-1/2 translate-x-[-50%] flex justify-center bg-white absolute -top-3 z-10 px-1">
            Atau
          </span>
          <hr className="border absolute top-1/2 -translate-y-1/2 border-gray-300 w-full" />
        </div>
        <Button type="button" onClick={() => loginByGoogle()} variant="secondary">
          <GoogleIcon />
          Masuk dengan Google
        </Button>
      </div>
    </form>
  );
};
