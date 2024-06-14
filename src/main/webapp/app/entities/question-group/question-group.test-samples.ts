import { IQuestionGroup, NewQuestionGroup } from './question-group.model';

export const sampleWithRequiredData: IQuestionGroup = {
  id: 17833,
  name: 'usually',
};

export const sampleWithPartialData: IQuestionGroup = {
  id: 18640,
  name: 'sometimes till instead',
};

export const sampleWithFullData: IQuestionGroup = {
  id: 7260,
  name: 'yawningly spiffy',
};

export const sampleWithNewData: NewQuestionGroup = {
  name: 'democracy twirl per',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
