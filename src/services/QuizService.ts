import axios from 'axios';

const getRandomQuizQuestion = () =>
  axios.get(process.env.FETCH_QUESTION_ENDPOINT);

export {getRandomQuizQuestion};
