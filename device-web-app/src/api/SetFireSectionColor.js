const SetFireSectionColor = async () => {
  try {
    const apiUrl = `http://YOUR-IP/section-color/fire`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network Error");
    }
  } catch (error) {
    console.error("Error While Loading Colors", error);
  }
};

export default SetFireSectionColor;
