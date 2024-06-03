import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 16528,
};

export const sampleWithPartialData: IDepartment = {
  id: 31369,
};

export const sampleWithFullData: IDepartment = {
  id: 18224,
  name: 'itemize crossly',
};

export const sampleWithNewData: NewDepartment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
