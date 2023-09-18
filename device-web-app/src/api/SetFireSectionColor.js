import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SetFireSectionColor = async () => {
  try {
    const apiUrl = `http://${process.env.REACT_APP_ESP_IP}/section-color/fire`;
    await fetch(apiUrl);
  } catch (error) {
    toast.error("Connection Problem", {
      position: toast.POSITION.TOP_CENTER,
      toastId: "error",
    });
  }
};

export default SetFireSectionColor;
