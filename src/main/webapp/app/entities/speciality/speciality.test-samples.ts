import { ISpeciality, NewSpeciality } from './speciality.model';

export const sampleWithRequiredData: ISpeciality = {
  id: 17068,
};

export const sampleWithPartialData: ISpeciality = {
  id: 24849,
  name: 'old-fashioned frightened even',
};

export const sampleWithFullData: ISpeciality = {
  id: 24501,
  name: 'starchy',
};

export const sampleWithNewData: NewSpeciality = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
