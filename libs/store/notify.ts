import { TNotify } from "@/components/ui/notify/type";
import { atom, useRecoilState } from "recoil";

const notifyStore = atom<TNotify>({
  key: "notifyStore",
  default: {
    show: false,
    message: "",
    type: "success",
    position: "top",
  },
});

export const useNotifyStore = () => {
  const [notify, setNotify] = useRecoilState(notifyStore);
  return {
    notify,
    setNotify,
  };
};
