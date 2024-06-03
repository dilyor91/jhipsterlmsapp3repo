import dayjs from 'dayjs/esm';

import { IStudyAcademicYear, NewStudyAcademicYear } from './study-academic-year.model';

export const sampleWithRequiredData: IStudyAcademicYear = {
  id: 26973,
};

export const sampleWithPartialData: IStudyAcademicYear = {
  id: 11096,
};

export const sampleWithFullData: IStudyAcademicYear = {
  id: 15869,
  fromDate: dayjs('2024-05-30T11:55'),
  endDate: dayjs('2024-05-30T14:20'),
};

export const sampleWithNewData: NewStudyAcademicYear = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
