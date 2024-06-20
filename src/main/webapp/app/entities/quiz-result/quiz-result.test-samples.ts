import { IQuizResult, NewQuizResult } from './quiz-result.model';

export const sampleWithRequiredData: IQuizResult = {
  id: 6593,
};

export const sampleWithPartialData: IQuizResult = {
  id: 26404,
  point: 32747,
  correctAnswerCnt: 21924,
  wrongAnswerCnt: 17846,
};

export const sampleWithFullData: IQuizResult = {
  id: 32051,
  point: 2316,
  totalQuestionCnt: 16662,
  correctAnswerCnt: 20169,
  wrongAnswerCnt: 30402,
};

export const sampleWithNewData: NewQuizResult = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
