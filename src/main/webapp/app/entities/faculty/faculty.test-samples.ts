import { IFaculty, NewFaculty } from './faculty.model';

export const sampleWithRequiredData: IFaculty = {
  id: 31819,
};

export const sampleWithPartialData: IFaculty = {
  id: 27919,
};

export const sampleWithFullData: IFaculty = {
  id: 30344,
  name: 'supposing deem',
};

export const sampleWithNewData: NewFaculty = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
