import { IQuestion, NewQuestion } from './question.model';

export const sampleWithRequiredData: IQuestion = {
  id: 18234,
  questionText: 'pressurisation boohoo where',
};

export const sampleWithPartialData: IQuestion = {
  id: 1945,
  questionText: 'whereas psst meanwhile',
};

export const sampleWithFullData: IQuestion = {
  id: 1567,
  questionText: 'foolishly eyebrow',
  point: 575,
};

export const sampleWithNewData: NewQuestion = {
  questionText: 'up capitalize versus',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
