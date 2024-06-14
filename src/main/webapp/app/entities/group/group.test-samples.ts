import { IGroup, NewGroup } from './group.model';

export const sampleWithRequiredData: IGroup = {
  id: 13899,
};

export const sampleWithPartialData: IGroup = {
  id: 32638,
};

export const sampleWithFullData: IGroup = {
  id: 3181,
  name: 'towards flawed',
};

export const sampleWithNewData: NewGroup = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
