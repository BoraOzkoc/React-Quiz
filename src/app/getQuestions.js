// export function getQuestions() {
//   fetch("https://opentdb.com/api.php?amount=10&type=multiple")
//     .then((res) => res.json())
//     .then((json) => {
//       return json.results;
//     });
// }
const getQuestions = async () => {
  const endpoint = `https://opentdb.com/api.php?amount=10&type=multiple`;
  const response = await (await fetch(endpoint)).json();

  if (response.results) {
    return await response.results
  } else {
    return await response.result
  }

};
export default getQuestions
