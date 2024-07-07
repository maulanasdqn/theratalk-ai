"use client";
import { OTPIllustration } from "@/components/svg-tsx/otp-ill";
import { Button } from "@/components/ui/button";
import { OtpInput } from "@/components/ui/otp-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, ReactElement, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TOTPForm, schema } from "../_entities/schema";
import { otpVerification } from "../_actions/otp-action";
import { Modal } from "@/components/ui/modal";
import { CheckIcon } from "@/components/svg-tsx/check-icon";
import { useNotifyStore } from "@/libs/store/notify";

export const OTPFormModule: FC = (): ReactElement => {
  const [otpValues, setOtpValues] = useState<string[]>(Array(4).fill(""));
  const [successModal, setSuccessModal] = useState(false);
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const { setNotify, notify } = useNotifyStore();

  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<TOTPForm>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const type = searchParams.get("type") as string;
    const res = await otpVerification({
      email: searchParams.get("email") as string,
      type,
      otp: data.otp,
    });

    if (res?.success) {
      setSuccessModal(true);
      setNotify({
        ...notify,
        show: true,
        type: "success",
        message: res?.success?.message,
      });
    }

    if (res?.error) {
      setNotify({
        ...notify,
        show: true,
        type: "error",
        message: res?.error?.message,
      });
    }
  });

  useEffect(() => {
    if (otpValues.every((value) => value.length !== 0)) {
      reset({ otp: otpValues.join("") });
    } else {
      reset({ otp: "" });
    }
  }, [otpValues, reset]);

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-[594px] p-6 bg-white shadow-md h-auto rounded-xl flex flex-col gap-y-6 justify-center"
    >
      <div className="flex flex-col gap-y-3">
        <div className="w-full flex justify-center items-center">
          <OTPIllustration />
        </div>
        <h1 className="text-3xl font-bold">OTP Verfication</h1>
        <p className="text-gray-400 text-sm">
          Kami telah mengirimkan kode OTP ke alamat email {searchParams.get("email")}
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <OtpInput setOtpValues={setOtpValues} otpValues={otpValues} />
        <Button disabled={!isValid}>Verfikasi</Button>
        <div className="w-full flex justify-center">
          <div className="text-xs sm:text-sm text-gray-500">
            Belum menerima kode?{" "}
            <span className="text-green-700 text-xs sm:text-sm">Kirim Ulang</span>
          </div>
        </div>
      </div>
      <Modal
        icon={<CheckIcon />}
        onClose={() => setSuccessModal(false)}
        onOk={() => push("/auth/login")}
        okText="Ke Halaman Login"
        title="Akun Berhasil Dibuat"
        content="Akun berhasil dibuat, anda dapat melakukan login dengan akun anda dengan menekan tombol di bawah"
        open={successModal}
      />
    </form>
  );
};
