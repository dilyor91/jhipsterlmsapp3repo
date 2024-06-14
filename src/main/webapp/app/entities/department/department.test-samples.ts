import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 16289,
};

export const sampleWithPartialData: IDepartment = {
  id: 11852,
};

export const sampleWithFullData: IDepartment = {
  id: 10593,
  name: 'searchingly aha',
};

export const sampleWithNewData: NewDepartment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
