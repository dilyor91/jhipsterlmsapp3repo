import { IFaculty, NewFaculty } from './faculty.model';

export const sampleWithRequiredData: IFaculty = {
  id: 5511,
};

export const sampleWithPartialData: IFaculty = {
  id: 3259,
};

export const sampleWithFullData: IFaculty = {
  id: 8602,
  name: 'yet',
};

export const sampleWithNewData: NewFaculty = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
