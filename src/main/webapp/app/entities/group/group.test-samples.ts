import { IGroup, NewGroup } from './group.model';

export const sampleWithRequiredData: IGroup = {
  id: 26348,
};

export const sampleWithPartialData: IGroup = {
  id: 13962,
  name: 'imagineer',
};

export const sampleWithFullData: IGroup = {
  id: 22560,
  name: 'meh gracefully',
};

export const sampleWithNewData: NewGroup = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
