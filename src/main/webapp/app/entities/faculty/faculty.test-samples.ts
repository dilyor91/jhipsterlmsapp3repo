import { IFaculty, NewFaculty } from './faculty.model';

export const sampleWithRequiredData: IFaculty = {
  id: 20819,
};

export const sampleWithPartialData: IFaculty = {
  id: 14112,
  name: 'bright',
};

export const sampleWithFullData: IFaculty = {
  id: 18656,
  name: 'regulation',
};

export const sampleWithNewData: NewFaculty = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
