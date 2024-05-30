import { ISpeciality, NewSpeciality } from './speciality.model';

export const sampleWithRequiredData: ISpeciality = {
  id: 11982,
};

export const sampleWithPartialData: ISpeciality = {
  id: 32330,
  name: 'yippee until',
};

export const sampleWithFullData: ISpeciality = {
  id: 21432,
  name: 'swaddle',
};

export const sampleWithNewData: NewSpeciality = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
