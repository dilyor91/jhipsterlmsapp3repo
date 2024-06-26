import { IGroup, NewGroup } from './group.model';

export const sampleWithRequiredData: IGroup = {
  id: 3913,
};

export const sampleWithPartialData: IGroup = {
  id: 15303,
  name: 'following',
};

export const sampleWithFullData: IGroup = {
  id: 24739,
  name: 'thoroughly lightly',
};

export const sampleWithNewData: NewGroup = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
