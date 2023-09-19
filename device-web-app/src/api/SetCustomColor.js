import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SetCustomColor = async (r, g, b) => {
  try {
    const apiUrl = `http://192.168.118.41/custom-color?r=${r}&g=${g}&b=${b}`;
    await fetch(apiUrl);
  } catch (error) {
    toast.error("Connection Problem", {
      position: toast.POSITION.TOP_CENTER,
      toastId: "error",
    });
  }
};

export default SetCustomColor;
