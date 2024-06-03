import { ISpeciality, NewSpeciality } from './speciality.model';

export const sampleWithRequiredData: ISpeciality = {
  id: 26758,
};

export const sampleWithPartialData: ISpeciality = {
  id: 1624,
};

export const sampleWithFullData: ISpeciality = {
  id: 18675,
  name: 'push',
};

export const sampleWithNewData: NewSpeciality = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
