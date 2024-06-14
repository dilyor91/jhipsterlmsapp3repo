import dayjs from 'dayjs/esm';

import { IStudyAcademicYear, NewStudyAcademicYear } from './study-academic-year.model';

export const sampleWithRequiredData: IStudyAcademicYear = {
  id: 30249,
};

export const sampleWithPartialData: IStudyAcademicYear = {
  id: 6259,
};

export const sampleWithFullData: IStudyAcademicYear = {
  id: 22661,
  fromDate: dayjs('2024-05-31T03:27'),
  endDate: dayjs('2024-05-30T08:56'),
};

export const sampleWithNewData: NewStudyAcademicYear = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
