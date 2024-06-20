import { IStudentAnswerQuestion, NewStudentAnswerQuestion } from './student-answer-question.model';

export const sampleWithRequiredData: IStudentAnswerQuestion = {
  id: 32493,
};

export const sampleWithPartialData: IStudentAnswerQuestion = {
  id: 21735,
  isCorrect: false,
};

export const sampleWithFullData: IStudentAnswerQuestion = {
  id: 30255,
  isCorrect: false,
};

export const sampleWithNewData: NewStudentAnswerQuestion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
