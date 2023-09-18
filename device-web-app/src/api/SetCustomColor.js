import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SetCustomColor = async (r, g, b) => {
  try {
    const apiUrl = `http://${process.env.REACT_APP_ESP_IP}/custom-color?r=${r}&g=${g}&b=${b}`;
    await fetch(apiUrl);
  } catch (error) {
    toast.error("Connection Problem", {
      position: toast.POSITION.TOP_CENTER,
      toastId: "error",
    });
  }
};

export default SetCustomColor;
