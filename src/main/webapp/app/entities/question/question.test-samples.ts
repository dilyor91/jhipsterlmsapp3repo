import { IQuestion, NewQuestion } from './question.model';

export const sampleWithRequiredData: IQuestion = {
  id: 18275,
  questionText: 'endorsement zowie geez',
};

export const sampleWithPartialData: IQuestion = {
  id: 9417,
  questionText: 'blunt rigidly whenever',
  point: 29201,
};

export const sampleWithFullData: IQuestion = {
  id: 4961,
  questionText: 'growing',
  point: 26520,
};

export const sampleWithNewData: NewQuestion = {
  questionText: 'below acidly as',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
