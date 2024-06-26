import { IStudentOption, NewStudentOption } from './student-option.model';

export const sampleWithRequiredData: IStudentOption = {
  id: 24473,
};

export const sampleWithPartialData: IStudentOption = {
  id: 23157,
  ordNum: 32258,
};

export const sampleWithFullData: IStudentOption = {
  id: 17896,
  ordNum: 13462,
};

export const sampleWithNewData: NewStudentOption = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
