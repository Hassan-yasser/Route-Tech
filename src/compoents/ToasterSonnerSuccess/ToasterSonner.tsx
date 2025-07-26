import toast from "react-hot-toast";

export const ToasterSonnerSuccess = (message: string) => {
  toast.dismiss();
  toast.success(message);
};
export const ToasterSonnerError = (message: string) => {
  toast.dismiss();
  toast.error(message);
};
