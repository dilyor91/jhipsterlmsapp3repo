import { IQuestion, NewQuestion } from './question.model';

export const sampleWithRequiredData: IQuestion = {
  id: 8447,
  questionText: 'incidentally ascertain',
};

export const sampleWithPartialData: IQuestion = {
  id: 3220,
  questionText: 'medium',
};

export const sampleWithFullData: IQuestion = {
  id: 29980,
  questionText: 'phew',
  point: 10951,
};

export const sampleWithNewData: NewQuestion = {
  questionText: 'awkward obedient till',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
