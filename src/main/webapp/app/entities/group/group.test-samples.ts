import { IGroup, NewGroup } from './group.model';

export const sampleWithRequiredData: IGroup = {
  id: 17262,
};

export const sampleWithPartialData: IGroup = {
  id: 27261,
};

export const sampleWithFullData: IGroup = {
  id: 384,
  name: 'whether adventurous ouch',
};

export const sampleWithNewData: NewGroup = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
