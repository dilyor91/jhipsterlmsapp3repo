import { ISpeciality, NewSpeciality } from './speciality.model';

export const sampleWithRequiredData: ISpeciality = {
  id: 22281,
};

export const sampleWithPartialData: ISpeciality = {
  id: 28290,
  name: 'upskill happily expiate',
};

export const sampleWithFullData: ISpeciality = {
  id: 7535,
  name: 'dabble bulky hungry',
};

export const sampleWithNewData: NewSpeciality = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
