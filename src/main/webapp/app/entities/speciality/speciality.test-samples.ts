import { ISpeciality, NewSpeciality } from './speciality.model';

export const sampleWithRequiredData: ISpeciality = {
  id: 31394,
};

export const sampleWithPartialData: ISpeciality = {
  id: 29809,
};

export const sampleWithFullData: ISpeciality = {
  id: 491,
  name: 'stable fast even',
};

export const sampleWithNewData: NewSpeciality = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
