import { IQuizResult, NewQuizResult } from './quiz-result.model';

export const sampleWithRequiredData: IQuizResult = {
  id: 9284,
};

export const sampleWithPartialData: IQuizResult = {
  id: 2719,
  totalQuestionCnt: 24271,
  correctAnswerCnt: 18542,
};

export const sampleWithFullData: IQuizResult = {
  id: 28786,
  point: 3236,
  totalQuestionCnt: 17013,
  correctAnswerCnt: 11601,
  wrongAnswerCnt: 11551,
};

export const sampleWithNewData: NewQuizResult = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
