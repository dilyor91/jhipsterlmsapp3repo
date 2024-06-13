import { IGroup, NewGroup } from './group.model';

export const sampleWithRequiredData: IGroup = {
  id: 21512,
};

export const sampleWithPartialData: IGroup = {
  id: 1929,
};

export const sampleWithFullData: IGroup = {
  id: 28866,
  name: 'however',
};

export const sampleWithNewData: NewGroup = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
