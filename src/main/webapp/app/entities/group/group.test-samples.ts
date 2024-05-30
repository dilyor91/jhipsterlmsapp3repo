import { IGroup, NewGroup } from './group.model';

export const sampleWithRequiredData: IGroup = {
  id: 22477,
};

export const sampleWithPartialData: IGroup = {
  id: 10454,
};

export const sampleWithFullData: IGroup = {
  id: 2038,
  name: 'clearing unaccountably loyally',
};

export const sampleWithNewData: NewGroup = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
