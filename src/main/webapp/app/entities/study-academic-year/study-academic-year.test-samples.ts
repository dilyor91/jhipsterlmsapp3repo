import dayjs from 'dayjs/esm';

import { IStudyAcademicYear, NewStudyAcademicYear } from './study-academic-year.model';

export const sampleWithRequiredData: IStudyAcademicYear = {
  id: 25194,
};

export const sampleWithPartialData: IStudyAcademicYear = {
  id: 25420,
};

export const sampleWithFullData: IStudyAcademicYear = {
  id: 16534,
  fromDate: dayjs('2024-05-30T04:47'),
  endDate: dayjs('2024-05-30T23:55'),
};

export const sampleWithNewData: NewStudyAcademicYear = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
