import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SetRainbowSectionColor = async () => {
  try {
    const apiUrl = `http://192.168.100.106/section-color/rainbow`;
    await fetch(apiUrl);
  } catch (error) {
    toast.error("Connection Problem", {
      position: toast.POSITION.TOP_CENTER,
      toastId: "error",
    });
  }
};

export default SetRainbowSectionColor;
