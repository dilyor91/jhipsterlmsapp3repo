import { ISpeciality, NewSpeciality } from './speciality.model';

export const sampleWithRequiredData: ISpeciality = {
  id: 32717,
};

export const sampleWithPartialData: ISpeciality = {
  id: 10708,
  name: 'fingerling immaterial',
};

export const sampleWithFullData: ISpeciality = {
  id: 3449,
  name: 'lest whose',
};

export const sampleWithNewData: NewSpeciality = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
