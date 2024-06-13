import dayjs from 'dayjs/esm';

import { IStudyAcademicYear, NewStudyAcademicYear } from './study-academic-year.model';

export const sampleWithRequiredData: IStudyAcademicYear = {
  id: 30903,
};

export const sampleWithPartialData: IStudyAcademicYear = {
  id: 8663,
  fromDate: dayjs('2024-05-31T02:12'),
  endDate: dayjs('2024-05-30T15:25'),
};

export const sampleWithFullData: IStudyAcademicYear = {
  id: 26692,
  fromDate: dayjs('2024-05-30T14:29'),
  endDate: dayjs('2024-05-30T19:57'),
};

export const sampleWithNewData: NewStudyAcademicYear = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
