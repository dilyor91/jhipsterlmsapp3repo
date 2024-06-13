import { IFaculty, NewFaculty } from './faculty.model';

export const sampleWithRequiredData: IFaculty = {
  id: 13483,
};

export const sampleWithPartialData: IFaculty = {
  id: 6352,
};

export const sampleWithFullData: IFaculty = {
  id: 9853,
  name: 'yurt meh bah',
};

export const sampleWithNewData: NewFaculty = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
