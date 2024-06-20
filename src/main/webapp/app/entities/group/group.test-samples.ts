import { IGroup, NewGroup } from './group.model';

export const sampleWithRequiredData: IGroup = {
  id: 15265,
};

export const sampleWithPartialData: IGroup = {
  id: 16765,
};

export const sampleWithFullData: IGroup = {
  id: 23036,
  name: 'beautifully duh',
};

export const sampleWithNewData: NewGroup = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
