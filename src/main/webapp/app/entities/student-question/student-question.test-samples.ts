import { IStudentQuestion, NewStudentQuestion } from './student-question.model';

export const sampleWithRequiredData: IStudentQuestion = {
  id: 9465,
};

export const sampleWithPartialData: IStudentQuestion = {
  id: 7225,
  ordNum: 8309,
};

export const sampleWithFullData: IStudentQuestion = {
  id: 24994,
  ordNum: 24609,
};

export const sampleWithNewData: NewStudentQuestion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
