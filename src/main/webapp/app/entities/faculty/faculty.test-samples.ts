import { IFaculty, NewFaculty } from './faculty.model';

export const sampleWithRequiredData: IFaculty = {
  id: 2552,
};

export const sampleWithPartialData: IFaculty = {
  id: 29411,
  name: 'save but',
};

export const sampleWithFullData: IFaculty = {
  id: 32670,
  name: 'judgementally minority',
};

export const sampleWithNewData: NewFaculty = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
