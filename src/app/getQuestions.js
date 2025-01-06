const getQuestions = async () => {
  try {
    const endpoint = `https://opentdb.com/api.php?amount=10&type=multiple`;
    const response = await fetch(endpoint);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return []; // Return an empty array if there’s an error
  }
};

export default getQuestions;
