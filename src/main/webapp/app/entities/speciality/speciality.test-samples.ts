import { ISpeciality, NewSpeciality } from './speciality.model';

export const sampleWithRequiredData: ISpeciality = {
  id: 8517,
};

export const sampleWithPartialData: ISpeciality = {
  id: 4367,
  name: 'whereas hungrily disappointment',
};

export const sampleWithFullData: ISpeciality = {
  id: 5071,
  name: 'kookily',
};

export const sampleWithNewData: NewSpeciality = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
