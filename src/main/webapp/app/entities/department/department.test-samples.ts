import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 9132,
};

export const sampleWithPartialData: IDepartment = {
  id: 28825,
};

export const sampleWithFullData: IDepartment = {
  id: 32536,
  name: 'cheerfully following eek',
};

export const sampleWithNewData: NewDepartment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
