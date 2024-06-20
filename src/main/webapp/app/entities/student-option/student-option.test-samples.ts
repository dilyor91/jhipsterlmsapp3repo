import { IStudentOption, NewStudentOption } from './student-option.model';

export const sampleWithRequiredData: IStudentOption = {
  id: 5215,
};

export const sampleWithPartialData: IStudentOption = {
  id: 2225,
};

export const sampleWithFullData: IStudentOption = {
  id: 31061,
  ordNum: 27276,
};

export const sampleWithNewData: NewStudentOption = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
