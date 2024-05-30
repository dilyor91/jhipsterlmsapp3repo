import { IFaculty, NewFaculty } from './faculty.model';

export const sampleWithRequiredData: IFaculty = {
  id: 21558,
};

export const sampleWithPartialData: IFaculty = {
  id: 14690,
};

export const sampleWithFullData: IFaculty = {
  id: 31065,
  name: 'needily above',
};

export const sampleWithNewData: NewFaculty = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
