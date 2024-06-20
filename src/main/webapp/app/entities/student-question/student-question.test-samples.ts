import { IStudentQuestion, NewStudentQuestion } from './student-question.model';

export const sampleWithRequiredData: IStudentQuestion = {
  id: 26576,
};

export const sampleWithPartialData: IStudentQuestion = {
  id: 30746,
};

export const sampleWithFullData: IStudentQuestion = {
  id: 14820,
  ordNum: 10089,
};

export const sampleWithNewData: NewStudentQuestion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
