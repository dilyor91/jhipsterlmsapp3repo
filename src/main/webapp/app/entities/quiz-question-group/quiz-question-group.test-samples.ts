import { IQuizQuestionGroup, NewQuizQuestionGroup } from './quiz-question-group.model';

export const sampleWithRequiredData: IQuizQuestionGroup = {
  id: 31229,
};

export const sampleWithPartialData: IQuizQuestionGroup = {
  id: 4517,
  questionCount: 6914,
};

export const sampleWithFullData: IQuizQuestionGroup = {
  id: 23174,
  questionCount: 21452,
};

export const sampleWithNewData: NewQuizQuestionGroup = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
