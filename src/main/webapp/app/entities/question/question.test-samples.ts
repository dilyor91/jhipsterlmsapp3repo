import { IQuestion, NewQuestion } from './question.model';

export const sampleWithRequiredData: IQuestion = {
  id: 15726,
  questionText: 'regarding during but',
};

export const sampleWithPartialData: IQuestion = {
  id: 9924,
  questionText: 'generally',
};

export const sampleWithFullData: IQuestion = {
  id: 12486,
  questionText: 'crowd at',
  point: 29937,
};

export const sampleWithNewData: NewQuestion = {
  questionText: 'besides prisoner gah',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
