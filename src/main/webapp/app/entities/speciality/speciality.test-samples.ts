import { ISpeciality, NewSpeciality } from './speciality.model';

export const sampleWithRequiredData: ISpeciality = {
  id: 26167,
};

export const sampleWithPartialData: ISpeciality = {
  id: 18652,
  name: 'pleat ghostwrite always',
};

export const sampleWithFullData: ISpeciality = {
  id: 7726,
  name: 'over',
};

export const sampleWithNewData: NewSpeciality = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
