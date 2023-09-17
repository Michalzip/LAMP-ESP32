const SetCustomColor = async (r, g, b) => {
  try {
    const apiUrl = `http://YOUR-IP/custom-color?r=${r}&g=${g}&b=${b}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network Error");
    }
  } catch (error) {
    console.error("Error While Loading Colors", error);
  }
};

export default SetCustomColor;
