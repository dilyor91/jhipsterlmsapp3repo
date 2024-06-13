import { IQuestionGroup, NewQuestionGroup } from './question-group.model';

export const sampleWithRequiredData: IQuestionGroup = {
  id: 18585,
  name: 'inside quest',
};

export const sampleWithPartialData: IQuestionGroup = {
  id: 3877,
  name: 'now sprag',
};

export const sampleWithFullData: IQuestionGroup = {
  id: 15810,
  name: 'with brr clearance',
};

export const sampleWithNewData: NewQuestionGroup = {
  name: 'tall piercing',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
