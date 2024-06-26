import { IFaculty, NewFaculty } from './faculty.model';

export const sampleWithRequiredData: IFaculty = {
  id: 13423,
};

export const sampleWithPartialData: IFaculty = {
  id: 30486,
};

export const sampleWithFullData: IFaculty = {
  id: 9387,
  name: 'foist alternative of',
};

export const sampleWithNewData: NewFaculty = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
