import { IFaculty, NewFaculty } from './faculty.model';

export const sampleWithRequiredData: IFaculty = {
  id: 8221,
};

export const sampleWithPartialData: IFaculty = {
  id: 12109,
  name: 'absent shrill brr',
};

export const sampleWithFullData: IFaculty = {
  id: 19466,
  name: 'calmly negative for',
};

export const sampleWithNewData: NewFaculty = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
