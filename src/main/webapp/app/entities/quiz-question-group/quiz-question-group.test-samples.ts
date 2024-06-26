import { IQuizQuestionGroup, NewQuizQuestionGroup } from './quiz-question-group.model';

export const sampleWithRequiredData: IQuizQuestionGroup = {
  id: 27873,
};

export const sampleWithPartialData: IQuizQuestionGroup = {
  id: 27030,
  questionCount: 18135,
};

export const sampleWithFullData: IQuizQuestionGroup = {
  id: 22557,
  questionCount: 32663,
};

export const sampleWithNewData: NewQuizQuestionGroup = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
