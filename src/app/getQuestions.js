// export function getQuestions() {
//   fetch("https://opentdb.com/api.php?amount=10&type=multiple")
//     .then((res) => res.json())
//     .then((json) => {
//       return json.results;
//     });
// }
const getQuestions = async () => {
  const endpoint = `https://opentdb.com/api.php?amount=10&type=multiple`;
  const { results } = await (await fetch(endpoint)).json();
  return await results;
};
export default getQuestions
