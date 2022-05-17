import { scoreEnum } from './helpers.types';

const MAX_SCORE_ANSWER = 5;
let currentScore = 0;
let currentChapterScore = MAX_SCORE_ANSWER;

const countScore = (score: scoreEnum | void) => {
  if (score === scoreEnum.WIN) {
    currentScore += currentChapterScore;
    currentChapterScore = MAX_SCORE_ANSWER;
  } else if (score === scoreEnum.RESET) {
    currentScore = 0;
    currentChapterScore = MAX_SCORE_ANSWER;
  } else {
    currentChapterScore -= 1;
  }
  return currentScore;
};

export default countScore;
