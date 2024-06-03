import dayjs from 'dayjs/esm';

import { IStudyAcademicYear, NewStudyAcademicYear } from './study-academic-year.model';

export const sampleWithRequiredData: IStudyAcademicYear = {
  id: 15509,
};

export const sampleWithPartialData: IStudyAcademicYear = {
  id: 5760,
  fromDate: dayjs('2024-05-30T05:18'),
  endDate: dayjs('2024-05-30T05:51'),
};

export const sampleWithFullData: IStudyAcademicYear = {
  id: 22606,
  fromDate: dayjs('2024-05-30T18:38'),
  endDate: dayjs('2024-05-31T01:07'),
};

export const sampleWithNewData: NewStudyAcademicYear = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
