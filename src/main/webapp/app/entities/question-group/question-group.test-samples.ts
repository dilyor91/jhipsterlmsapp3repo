import { IQuestionGroup, NewQuestionGroup } from './question-group.model';

export const sampleWithRequiredData: IQuestionGroup = {
  id: 21692,
  name: 'aside',
};

export const sampleWithPartialData: IQuestionGroup = {
  id: 9825,
  name: 'without',
};

export const sampleWithFullData: IQuestionGroup = {
  id: 10940,
  name: 'attenuation essence uneven',
};

export const sampleWithNewData: NewQuestionGroup = {
  name: 'harden throbbing',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
