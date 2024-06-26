import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 16469,
};

export const sampleWithPartialData: IDepartment = {
  id: 14766,
};

export const sampleWithFullData: IDepartment = {
  id: 16128,
  name: 'whoever sue',
};

export const sampleWithNewData: NewDepartment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
