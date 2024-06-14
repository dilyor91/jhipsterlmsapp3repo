import { IQuizQuestionGroup, NewQuizQuestionGroup } from './quiz-question-group.model';

export const sampleWithRequiredData: IQuizQuestionGroup = {
  id: 8045,
};

export const sampleWithPartialData: IQuizQuestionGroup = {
  id: 6516,
};

export const sampleWithFullData: IQuizQuestionGroup = {
  id: 17705,
  questionCount: 18479,
};

export const sampleWithNewData: NewQuizQuestionGroup = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
