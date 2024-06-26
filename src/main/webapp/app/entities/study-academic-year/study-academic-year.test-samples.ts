import dayjs from 'dayjs/esm';

import { IStudyAcademicYear, NewStudyAcademicYear } from './study-academic-year.model';

export const sampleWithRequiredData: IStudyAcademicYear = {
  id: 27977,
};

export const sampleWithPartialData: IStudyAcademicYear = {
  id: 12005,
  fromDate: dayjs('2024-05-30T11:48'),
  endDate: dayjs('2024-05-30T12:51'),
};

export const sampleWithFullData: IStudyAcademicYear = {
  id: 10308,
  fromDate: dayjs('2024-05-30T18:11'),
  endDate: dayjs('2024-05-30T23:54'),
};

export const sampleWithNewData: NewStudyAcademicYear = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
