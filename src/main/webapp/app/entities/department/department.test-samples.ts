import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 26091,
};

export const sampleWithPartialData: IDepartment = {
  id: 2979,
};

export const sampleWithFullData: IDepartment = {
  id: 843,
  name: 'modulo because fatherly',
};

export const sampleWithNewData: NewDepartment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
