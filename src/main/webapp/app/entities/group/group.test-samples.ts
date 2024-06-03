import { IGroup, NewGroup } from './group.model';

export const sampleWithRequiredData: IGroup = {
  id: 7419,
};

export const sampleWithPartialData: IGroup = {
  id: 6124,
};

export const sampleWithFullData: IGroup = {
  id: 492,
  name: 'uh-huh',
};

export const sampleWithNewData: NewGroup = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
