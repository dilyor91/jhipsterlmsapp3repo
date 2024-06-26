import { IQuestionGroup, NewQuestionGroup } from './question-group.model';

export const sampleWithRequiredData: IQuestionGroup = {
  id: 12988,
  name: 'even',
};

export const sampleWithPartialData: IQuestionGroup = {
  id: 21655,
  name: 'sheepishly',
};

export const sampleWithFullData: IQuestionGroup = {
  id: 30023,
  name: 'except',
};

export const sampleWithNewData: NewQuestionGroup = {
  name: 'slather eligibility',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
